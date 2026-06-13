# PAC BLOC-1 — Gérer l'administration du personnel et la fonction RH

Responsable Ressources Humaines

## Déploiement
1. Créer le repo `lumio-bloc-1` avec **tout le contenu de ce ZIP**.
2. `git push` → connecter le repo à Vercel.
3. Variables Vercel : `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `RESEND_API_KEY`.
   (option `PORTFOLIO_FROM` = expéditeur vérifié sur Resend, ex. "Éminéo PAC <portfolio@emineo.fr>").

## À compléter (contenu narratif)
Le runtime tourne immédiatement, mais le contenu des apps chrome (emails, PDF, presse) est encore générique.
Remplacer dans `data.js` toutes les balises `[À COMPLÉTER]` par le contenu réel du bloc.
Les placeholders `{{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}}` sont substitués automatiquement à la connexion.
