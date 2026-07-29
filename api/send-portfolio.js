// api/send-portfolio.js — BC1 CDRH
// Envoi du portfolio de compétences par email (Resend)
// + écriture complétion dans cdrh-pac (Redis via portail)
// Variables d'environnement Vercel requises :
//   RESEND_API_KEY   (clé API Resend)
//   PORTFOLIO_FROM   (optionnel — ex: "PAC Éminéo <portfolio@emineo-education.fr>")

import { createHash } from 'crypto';

const PORTAIL_URL = 'https://cdrh-pac.vercel.app/api/progress';
const BLOC_ID     = 'bc1';

// Adresse de repli mise en copie quand le campus n'est pas résolu (vide ou absent du
// registre) — garantit qu'un portfolio n'est jamais produit sans destinataire
// institutionnel. Optionnelle : si absente, aucune copie n'est ajoutée (comportement
// précédent), l'incident reste tout de même journalisé.
const PAC_FALLBACK_EMAIL = process.env.PAC_FALLBACK_EMAIL || '';

const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// Minuscules, sans accents, espaces internes réduits — les identifiants du registre
// RP contiennent des espaces ("le mans", "la rochelle") sans forme canonique unique.
function normalizeCampus(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim().replace(/\s+/g, ' ');
}

// ── Mapping campus → email RP ──
// Source de vérité : hub emineo-campus-rp (éditable sans redéploiement,
// via /admin sur ce hub). CAMPUS_RP_FALLBACK n'est utilisé que si le hub
// est injoignable — l'envoi du portfolio ne doit jamais en dépendre.
const CAMPUS_RP_HUB = 'https://emineo-campus-rp.vercel.app/api/campus-rp';
const TITRE_CODE    = 'CDRH'; // MSMC | CDRH | MMD | MDO — résout les exceptions par titre côté hub
const CAMPUS_RP_FALLBACK = {
  'paris':    ['chloe.guyot@cesacom.fr', 'celine.maheo@cesacom.fr'],
  'nantes':   ['manon.parageaud@cesacom.fr', 'lara.naccache@emineo-education.fr'],
  'bordeaux': ['anthony.nabli@emineo-education.fr'],
  'le mans':  ['johnny.nicolas@isme.fr'],
  'lemans':   ['johnny.nicolas@isme.fr'],
};

async function getCampusRPMap() {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2500);
    const r = await fetch(CAMPUS_RP_HUB + '?titre=' + TITRE_CODE, { signal: ctrl.signal });
    clearTimeout(t);
    if (!r.ok) throw new Error('hub non-OK: ' + r.status);
    const data = await r.json();
    const map = {};
    for (const c of (data.campuses || [])) {
      const emails = (c.rp || []).map(p => p.email).filter(Boolean);
      if (c.id) map[normalizeCampus(c.id)] = emails;
      if (c.label) map[normalizeCampus(c.label)] = emails;
    }
    return map;
  } catch (e) {
    console.warn('Hub campus-rp injoignable, fallback local:', e.message);
    return CAMPUS_RP_FALLBACK;
  }
}

function hashEmail(email) {
  return createHash('sha256')
    .update(email.toLowerCase().trim())
    .digest('hex')
    .slice(0, 24);
}

async function markCompleted(email) {
  if (!email) return false;
  try {
    const hash = hashEmail(email);
    const r = await fetch(PORTAIL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hash, bloc: BLOC_ID, status: 'completed' }),
    });
    return r.ok;
  } catch (err) {
    // Non bloquant — la complétion est best-effort
    console.warn('markCompleted error:', err.message);
    return false;
  }
}

const CAMPUS_INCIDENTS_KEY = 'cdrh:bc1:campus-incidents';

// Journalise un campus non résolu (vide ou absent du registre) pour permettre un
// réacheminement manuel a posteriori — best-effort, ne doit jamais bloquer l'envoi.
async function logCampusIncident({ email, studentName, bloc, campusReceived }) {
  const incident = {
    event: 'campus_unresolved',
    timestamp: new Date().toISOString(),
    email, studentName, bloc, campusReceived,
  };
  console.warn('campus_unresolved:', JSON.stringify(incident));
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return;
  try {
    // Commande envoyée dans le corps (syntaxe REST Upstash ["RPUSH", clé, valeur]),
    // jamais dans l'URL — email/studentName sont des données personnelles qui ne
    // doivent pas finir dans les journaux d'accès Vercel/Upstash.
    await fetch(UPSTASH_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(['RPUSH', CAMPUS_INCIDENTS_KEY, JSON.stringify(incident)]),
    });
  } catch (err) {
    console.warn('logCampusIncident redis error:', err.message);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const resendKey = process.env.RESEND_API_KEY;
  const from      = process.env.PORTFOLIO_FROM || 'PAC Éminéo <onboarding@resend.dev>';

  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body);

    const { email, studentName, portfolioHTML, bloc, date, campus } = body || {};

    if (!email || !portfolioHTML) {
      return res.status(400).json({ error: 'Champs requis manquants : email, portfolioHTML' });
    }

    if (!resendKey) {
      console.error('RESEND_API_KEY non configurée — portfolio non envoyé');
      return res.status(503).json({ error: 'RESEND_API_KEY non configurée', sent: false });
    }

    // ── Coche de completion AVANT Resend (garantit la progression Redis
    // même si l'envoi de l'email échoue ensuite — cf. principe markCompleted) ──
    const completed = await markCompleted(email);

    const campusRPMap = await getCampusRPMap();

    const nomBloc    = bloc || 'BC1 CDRH';
    const normalizedCampus = normalizeCampus(campus);
    const resolvedCC = normalizedCampus && campusRPMap[normalizedCampus];
    const campusResolved = !!(resolvedCC && resolvedCC.length);
    const cc = campusResolved ? resolvedCC : (PAC_FALLBACK_EMAIL ? [PAC_FALLBACK_EMAIL] : []);

    if (!campusResolved) {
      await logCampusIncident({ email, studentName, bloc: nomBloc, campusReceived: campus || '' });
    }

    const dateStr    = date || new Date().toLocaleDateString('fr-FR');
    const prenom     = studentName ? studentName.split(' ')[0] : 'Étudiant(e)';
    const subject    = `Votre portfolio de compétences PAC — ${nomBloc}`;

    // ── Template email Éminéo ──────────────────────────────────────────────
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'IBM Plex Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4;">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:#0B2B2D;padding:28px 32px;">
            <span style="font-size:22px;font-weight:700;color:#5DE298;letter-spacing:-0.5px;">
              Éminéo Education
            </span>
            <span style="font-size:13px;color:#E3FFF0;margin-left:12px;opacity:0.7;">
              PAC · Parcours Activation Compétences
            </span>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:32px 32px 16px;">
            <p style="margin:0 0 12px;font-size:16px;color:#0B2B2D;">Bonjour ${prenom},</p>
            <p style="margin:0 0 12px;font-size:15px;color:#134547;line-height:1.6;">
              Voici votre portfolio de compétences issu du <strong>${nomBloc}</strong>,
              généré le <strong>${dateStr}</strong>.
            </p>
            <p style="margin:0;font-size:14px;color:#555;line-height:1.6;">
              Ce document retrace votre parcours dans l'affaire Lumio Health et
              l'évaluation IA de vos productions sur les critères du référentiel RNCP 38438.
            </p>
          </td>
        </tr>

        <!-- Séparateur menthe -->
        <tr>
          <td style="padding:0 32px;">
            <div style="height:3px;background:linear-gradient(90deg,#5DE298,#134547);border-radius:2px;"></div>
          </td>
        </tr>

        <!-- Corps portfolio -->
        <tr>
          <td style="padding:24px 32px;">
            ${portfolioHTML}
          </td>
        </tr>

        <!-- Encart no-reply -->
        <tr>
          <td style="padding:0 32px 24px;">
            <div style="background:#E3FFF0;border-left:4px solid #5DE298;
                        padding:12px 16px;border-radius:0 6px 6px 0;">
              <p style="margin:0;font-size:12px;color:#134547;">
                ⚠️ Cet email est envoyé depuis une adresse <strong>no-reply</strong>. 
                Pour toute question, contactez directement votre référent Éminéo.
              </p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0B2B2D;padding:20px 32px;">
            <p style="margin:0;font-size:12px;color:#E3FFF0;opacity:0.6;text-align:center;">
              Éminéo Education · RNCP 38438 · PAC ${nomBloc} · ${dateStr}
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // ── Envoi Resend ──────────────────────────────────────────────────────
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from,
        to:       [email],
        cc,
        reply_to: [],
        subject,
        html,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      // Resend KO mais la coche Redis est déjà passée → 200 avec warning
      console.error('Resend error:', resendData);
      return res.status(200).json({
        sent: false,
        completed,
        campusResolved,
        warning: 'Email failed but progress saved on portal',
        resendError: resendData,
      });
    }

    return res.status(200).json({ sent: true, completed, campusResolved, id: resendData.id });

  } catch (err) {
    console.error('send-portfolio handler error:', err);
    return res.status(500).json({ error: 'Erreur serveur', message: err.message, sent: false });
  }
}
