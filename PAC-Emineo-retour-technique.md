# Dispositif PAC Éminéo — Retour d'expérience technique et plan de correction

**Date de l'audit :** 29 juillet 2026
**Périmètre :** `emineo-pac.vercel.app` et l'ensemble des applications qu'il dessert
**Méthode :** audit boîte noire en navigateur (DOM, scripts servis, appels réseau, réponses d'API). Aucun accès au code source ni aux dépôts Git. Aucun envoi d'e-mail réel n'a été déclenché.

---

## 0. Comment utiliser ce document

Ce document est un cahier de correction. Chaque anomalie est numérotée, accompagnée de la **preuve observée**, du **fichier concerné** et du **correctif attendu**.

Trois précautions avant de corriger :

1. Les constats portent sur les **fichiers servis en production**. Les noms de fichiers (`main.jsx`, `app-livrable.jsx`…) sont ceux servis par Vercel ; ils devraient correspondre au dépôt, à vérifier.
2. **6 applications de blocs sur 18 ont été inspectées.** Le motif est cohérent, mais les 12 restantes doivent être vérifiées avant toute conclusion générale (§5).
3. Les corrections A1 et A2 touchent la chaîne d'envoi des portfolios. Elles doivent être validées par un envoi réel de bout en bout avant remise en service (§6).

---

## 1. Architecture constatée

```
emineo-pac.vercel.app                    ← hub, HTML statique, AUCUN JavaScript applicatif
        │  4 <div onclick="window.open(...)">
        ├── msmc-pac.vercel.app     RNCP 38504  → lumio-bc1, -bc2, -bc3, -bc5, -bc6
        ├── cdrh-pac.vercel.app     RNCP 38438  → cdrh-bc1 … cdrh-bc4
        ├── mmd-pac.vercel.app      RNCP 40170  → mmd-bc1, -bc2, -bc3, -bc4-i, -bc4-ii
        └── mdo-pac.vercel.app      RNCP 35280  → mdo-bc1 … mdo-bc4

emineo-campus-rp.vercel.app/api/campus-rp    ← registre campus → référents pédagogiques
```

Soit **23 déploiements Vercel distincts** : 1 hub, 4 pages d'identification, 18 applications de blocs, 1 registre de destinataires.

### Le registre des destinataires

`GET https://emineo-campus-rp.vercel.app/api/campus-rp` → `200`, structure `{ campuses: [ { id, label, rp: [ { nom, email } ] } ] }`

| Campus (`id`) | Référents pédagogiques |
|---|---|
| `paris` | Chloé Guyot · Céline Mahéo (`@cesacom.fr`) |
| `nantes` | Manon Parageaud (`@cesacom.fr`) · Lara Naccache (`@emineo-education.fr`) |
| `bordeaux` | Anthony Nabli (`@emineo-education.fr`) |
| `le mans` | Johnny Nicolas (`@isme.fr`) |
| `la rochelle` | Audrey Bogo (`@isme.fr`) |

Ce service **fonctionne correctement**. Il n'est pas en cause dans les anomalies ci-dessous.

### Les routes serveur des applications de blocs

| Route | Rôle présumé | État observé |
|---|---|---|
| `/api/send-portfolio` | envoi du portfolio | existe (`405` sur GET → POST uniquement) |
| `/api/chat` | assistant, Slack, livrable | référencée |
| `/api/session` | session apprenant | référencée (clé `localStorage` : `lumio_sid`) |
| `/api/progress` | avancement des blocs | présente sur `msmc-pac` et `mdo-pac` uniquement |

### Chaîne de transmission de l'identité

```
Page d'identification : prénom, nom, e-mail école, campus
  → sessionStorage (msmc : clés pac_msmc_prenom / _nom / _email / _hash / _campus)
  → redirection vers l'app de bloc : ?p=<prénom>&n=<nom>&e=<email>&c=<campus>
  → main.jsx lit les paramètres et construit l'objet `stu`
  → app-livrable.jsx POST /api/send-portfolio { blocCode, prenom, nom, missionTitre,
       miseEnSituation, choix, justification, imageSrc, competences, campus }
  → le serveur résout le destinataire à partir de `campus` via le registre campus-rp
```

**C'est à la quatrième étape que la chaîne casse.**

---

## 2. Anomalies bloquantes

### A1 — Le campus n'est jamais transmis : le portfolio ne peut pas atteindre son destinataire

**Sévérité : bloquante.** C'est la cause racine du dysfonctionnement de l'envoi.

**Constat.** `app-livrable.jsx` construit le corps de la requête avec :

```js
campus: stu.campus || ""
```

Or dans `main.jsx`, seuls trois paramètres d'URL sont lus :

```js
params.get('p')   // prénom
params.get('n')   // nom
params.get('e')   // e-mail
// params.get('c') → ABSENT
```

`stu.campus` est donc toujours `undefined`, et le POST part systématiquement avec `campus: ""`. Le serveur ne peut pas résoudre le référent pédagogique : le portfolio ne part pas, ou part vers un destinataire de repli.

La page d'identification transmet pourtant bien `&c=paris` dans l'URL. **L'information est envoyée mais jamais lue.**

**Vérifié sur :**

| Application | `main.jsx` lit `c` ? |
|---|---|
| `lumio-bc1` | ✅ oui — seule application conforme |
| `lumio-bc2` | ❌ non |
| `cdrh-bc1` | ❌ non |
| `mmd-bc1` | ❌ non |
| `mdo-bc1` | ❌ non |

**Correctif attendu.** Dans `main.jsx` de chaque application de bloc, aligner la lecture des paramètres sur celle de `lumio-bc1` : lire `c` et l'injecter dans l'objet `stu` sous la clé `campus`.

Deux garde-fous à ajouter :

- **Normalisation.** Les identifiants du registre contiennent des espaces (`le mans`, `la rochelle`). Normaliser en minuscules et comparer sur une forme canonique, sinon `Le Mans` ne correspondra à rien.
- **Échec explicite.** Si `campus` est vide ou inconnu, ne pas envoyer silencieusement : afficher un message à l'apprenant et journaliser côté serveur. Un portfolio perdu sans trace est le pire scénario dans un dispositif certifiant.

### A2 — Aucune pièce jointe : le portfolio part sans le portfolio

**Sévérité : bloquante.**

**Constat.** Le champ `attachments` n'est présent que dans `app-livrable.jsx` de `lumio-bc1` :

```js
// lumio-bc1 (à jour)
campus: stu.campus || "", attachments })

// lumio-bc2, cdrh-bc1, mmd-bc1, mdo-bc1 (ancien build)
campus: stu.campus || "" })
```

Corollaire dans le chargement des scripts : `lumio-bc1` sert `portfolio-card-template.browser.js` (avec `html2canvas`), **ce fichier est absent de la liste des scripts de `cdrh-bc1`**. Le module de rendu de la carte portfolio n'est donc pas déployé sur les anciens builds.

Le destinataire reçoit au mieux un e-mail décrivant le portfolio, sans le document.

**Correctif attendu.** Redéployer les 17 applications de blocs sur la base du build de `lumio-bc1` : inclusion de `portfolio-card-template.browser.js`, génération de l'image via `html2canvas`, transmission dans `attachments`. Vérifier côté serveur que `/api/send-portfolio` traite bien `attachments` et échoue explicitement s'il est absent.

### A3 — Dérive de versions entre les 18 applications de blocs

**Sévérité : bloquante à moyen terme.** A1 et A2 en sont les symptômes.

Une seule application sur les six inspectées est à jour. Les 18 blocs sont des clones divergents d'une même base, sans mécanisme de synchronisation. Corriger A1 et A2 application par application reproduira le problème au prochain correctif.

**Correctif attendu.** Extraire le socle commun — `main.jsx`, `app-*.jsx`, `desktop.jsx`, `icons.jsx`, `portfolio-card-template.browser.js`, routes `/api/*` — dans un paquet partagé ou un monorepo, et ne laisser dans chaque bloc que ce qui lui est spécifique : `data.js` (scénario) et les métadonnées. Un déploiement doit alors propager le correctif partout.

**Preuve de la dérive :** les pages d'identification elles-mêmes divergent. `msmc-pac` utilise les identifiants de champs `inp-prenom` / `inp-campus` et appelle `/api/progress` ; `cdrh-pac`, `mmd-pac` et `mdo-pac` utilisent `input-prenom` / `input-nom` / `input-email`, et seule `mdo-pac` appelle `/api/progress`.

---

## 3. Anomalies fonctionnelles

### B1 — Un bloc validé devient définitivement inaccessible

**Constat.** `/api/progress?hash=<hash>` renvoie l'état par bloc. Comportement vérifié :

| Hash | Réponse |
|---|---|
| absent | `400 {"error":"hash manquant"}` |
| inconnu | tous les blocs `"available"` |
| apprenant ayant terminé | tous les blocs `"completed"` |

Quand un bloc est `completed`, la carte est rendue avec la classe `bloc-card--done` **et `href="#"`**. Le lien vers l'application de bloc n'est plus généré : l'apprenant ne peut plus rouvrir le bloc, ni relire sa production, ni récupérer son portfolio.

Reproduit avec un compte dont les 5 blocs MSMC sont `completed` : les 5 cartes sont mortes.

**Correctif attendu.** Décider explicitement du comportement voulu et le rendre lisible :

- soit un bloc terminé reste **consultable en lecture seule**, avec un lien de téléchargement du portfolio produit — c'est l'attente naturelle dans un dispositif certifiant ;
- soit il est réellement verrouillé, et il faut alors l'indiquer (curseur, `aria-disabled`, message au survol) plutôt que de laisser une carte qui semble cliquable et ne fait rien.

Dans les deux cas, prévoir un accès de récupération du portfolio après validation.

### B2 — Le libellé « COMPLÉTÉ » est ambigu

La carte d'un bloc terminé affiche `✓ COMPLÉTÉ` avec un rendu grisé, identique visuellement à un état « indisponible ». Combiné à B1, l'apprenant ne peut pas distinguer « j'ai réussi » de « c'est fermé ». Préciser le libellé (`Validé — consulter`) et différencier le traitement visuel.

### B3 — Les cartes du hub ne sont pas des liens

Sur `emineo-pac`, les quatre titres RNCP sont des `<div onclick="window.open('https://…','_blank')">`. Conséquences : inaccessibles au clavier, invisibles aux lecteurs d'écran, sensibles aux bloqueurs de pop-up, impossible d'ouvrir dans un nouvel onglet volontairement.

**Correctif attendu.** Remplacer par `<a href="…" target="_blank" rel="noopener">`. Même remarque pour les cartes de blocs, qui sont bien des `<a>` mais avec `href="#"` quand le bloc est verrouillé.

---

## 4. Anomalies de qualité et de conformité

### C1 — Données personnelles en clair dans les URL

L'identité complète de l'apprenant circule en paramètres d'URL : `?p=<prénom>&n=<nom>&e=<email école>&c=<campus>`.

Ces valeurs se retrouvent dans les journaux d'accès Vercel, l'historique du navigateur, l'en-tête `Referer` envoyé aux tiers — et les applications de blocs appellent `unpkg.com` et `fonts.googleapis.com`. Nom, prénom et e-mail professionnel sont des données à caractère personnel : ce transport est difficilement défendable au regard du RGPD.

**Correctif attendu.** Remplacer par un jeton opaque à usage unique et courte durée de vie, échangé côté serveur contre l'identité (`/api/session` semble déjà prévu pour cela). À défaut, transmettre par `POST` ou via un identifiant de session, jamais l'e-mail en clair dans l'URL.

### C2 — React en version development et compilation JSX dans le navigateur

Chaque application de bloc charge depuis `unpkg.com` :

- `react@18.3.1/umd/react.development.js`
- `react-dom@18.3.1/umd/react-dom.development.js`
- `@babel/standalone@7.29.0/babel.min.js`

Puis compile **17 fichiers `.jsx` à chaque ouverture de page**, dans le navigateur de l'apprenant.

Trois conséquences : les builds development sont nettement plus lents et plus volumineux que les builds production ; la compilation Babel côté client ajoute un délai à chaque chargement ; et le dispositif est **entièrement dépendant de la disponibilité d'unpkg.com** — une indisponibilité du CDN rend les 18 blocs inutilisables simultanément. Sur un exercice chronométré à 3 h 30, c'est un risque pédagogique réel.

**Correctif attendu.** Compiler à la construction (Vite ou équivalent), servir les builds production de React, et héberger les dépendances avec l'application plutôt que depuis un CDN tiers.

### C3 — Métadonnées erronées, héritées du clonage

| Application | `<meta name="description">` observée | Attendu |
|---|---|---|
| `cdrh-bc1` | « MSMC RNCP 38504 · BC2 Stratégie Marcom » | CDRH RNCP 38438 · BC1 |
| `cdrh-bc2` | « MSMC RNCP 38504 · BC2 Stratégie Marcom » | CDRH RNCP 38438 · BC2 |
| `lumio-bc5` | « MSMC RNCP 38504 · BC3 Pilotage Campagne » | MSMC RNCP 38504 · BC5 |
| `lumio-bc6` | « MSMC RNCP 38504 · BC2 Stratégie Marcom » | MSMC RNCP 38504 · BC6 |

Le contenu pédagogique servi est correct — `cdrh-bc1` présente bien le scénario RH « Opération Pulse ». Seules les métadonnées n'ont pas été mises à jour.

Par ailleurs, `document.title` vaut `PAC · Lumio Health · BC1` sur `cdrh-bc1`, `mmd-bc1` et `mdo-bc1` : trois onglets identiques, sans mention du titre RNCP. Ajouter le code du parcours.

### C4 — Message d'erreur présent dans le HTML initial

Le HTML servi par les applications de blocs contient la chaîne :

> ⚠ Jefferson indisponible — Vérifiez la connexion ou contactez le support Éminéo

Il s'agit vraisemblablement d'un gabarit de notification masqué, mais il est présent dès le HTML statique et constitue le seul texte visible d'une page non interprétée. À vérifier : le message ne doit pas pouvoir apparaître au chargement, et son déclenchement réel (indisponibilité de `/api/chat`) doit être testé.

### C5 — Numéros de version incohérents

Le hub affiche `v2.0 · 2026`, la page d'identification MSMC affiche `Dispositif PAC v1.0`. Unifier, ou versionner par composant de façon explicite.

---

## 5. Périmètre non vérifié — à traiter en priorité

L'audit a porté sur **6 des 18 applications de blocs**. Les 12 suivantes n'ont pas été inspectées :

`lumio-bc3` · `lumio-bc5` · `lumio-bc6` · `cdrh-bc2` · `cdrh-bc3` · `cdrh-bc4` · `mmd-bc2` · `mmd-bc3` · `mmd-bc4-i` · `mmd-bc4-ii` · `mdo-bc2` · `mdo-bc3` · `mdo-bc4`

Pour chacune, contrôler :

- [ ] `main.jsx` lit-il le paramètre `c` et alimente-t-il `stu.campus` ?
- [ ] `app-livrable.jsx` transmet-il `attachments` ?
- [ ] `portfolio-card-template.browser.js` est-il servi ?
- [ ] `/api/send-portfolio` répond-il `405` sur GET (route déployée) ?
- [ ] `<meta name="description">` et `document.title` correspondent-ils au bloc et au RNCP ?
- [ ] `data.js` contient-il bien le scénario du bloc, et non celui d'un autre ?

**Aucun envoi réel de portfolio n'a été testé**, afin de ne pas adresser d'e-mail de test aux référents pédagogiques en poste. C'est la vérification décisive : elle reste à faire (§6).

---

## 6. Plan de validation après correction

À exécuter dans cet ordre, et à documenter.

**Étape 1 — Envoi de bout en bout, en conditions maîtrisées.** Ajouter temporairement une entrée de test dans le registre `campus-rp` pointant vers une boîte contrôlée, plutôt que d'envoyer aux référents en poste. Puis pour un bloc de chaque RNCP : parcours complet jusqu'à la production du portfolio, envoi, et contrôle de l'e-mail reçu — bon destinataire, pièce jointe présente, portfolio lisible, contenu conforme à la production de l'apprenant.

**Étape 2 — Les 5 campus.** Vérifier la résolution des identifiants comportant un espace (`le mans`, `la rochelle`) et le cas d'un campus à plusieurs référents (`paris`, `nantes` : les deux doivent être destinataires).

**Étape 3 — Cas d'échec.** Campus vide, campus inconnu, `/api/send-portfolio` indisponible, `unpkg.com` inaccessible. Dans chaque cas, l'apprenant doit voir un message explicite et l'incident doit être journalisé côté serveur. Un portfolio perdu silencieusement est inacceptable dans un dispositif certifiant.

**Étape 4 — Reprise après validation.** Vérifier qu'un apprenant dont un bloc est `completed` peut toujours accéder à sa production et à son portfolio (B1).

**Étape 5 — Balayage des 18 blocs.** Rejouer la grille du §5 sur les 18 applications après refactorisation, et confirmer l'homogénéité des builds.

---

## 7. Ordre de traitement recommandé

| Priorité | Anomalie | Effet |
|---|---|---|
| 1 | **A1** — lecture du paramètre `c` | débloque l'acheminement des portfolios |
| 2 | **A2** — pièce jointe et gabarit de carte | le portfolio arrive réellement |
| 3 | **B1** — accès après validation | les apprenants récupèrent leur production |
| 4 | **C1** — identité hors des URL | conformité RGPD |
| 5 | **A3** — socle commun | empêche la réapparition d'A1/A2 |
| 6 | **C2** — build de production | performance et fin de la dépendance à unpkg |
| 7 | **B2, B3, C3, C4, C5** | qualité, accessibilité, cohérence |

---

## Annexe — Inventaire des déploiements

| Rôle | Domaine | RNCP |
|---|---|---|
| Hub | `emineo-pac.vercel.app` | — |
| Registre destinataires | `emineo-campus-rp.vercel.app` | — |
| Identification MSMC | `msmc-pac.vercel.app` | 38504 |
| Identification CDRH | `cdrh-pac.vercel.app` | 38438 |
| Identification MMD | `mmd-pac.vercel.app` | 40170 |
| Identification MDO | `mdo-pac.vercel.app` | 35280 |
| Blocs MSMC | `lumio-bc1`, `-bc2`, `-bc3`, `-bc5`, `-bc6` | 38504 |
| Blocs CDRH | `cdrh-bc1` … `cdrh-bc4` | 38438 |
| Blocs MMD | `mmd-bc1`, `-bc2`, `-bc3`, `-bc4-i`, `-bc4-ii` | 40170 |
| Blocs MDO | `mdo-bc1` … `mdo-bc4` | 35280 |
