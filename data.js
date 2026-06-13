// ══════════════════════════════════════════════════════════════
//  DATA · PAC BLOC-1 · Responsable Ressources Humaines
//  Opération Pulse : restructuration RH chez Lumio Health · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack
//  ⚠️  Remplacer les [À COMPLÉTER] par le contenu narratif réel du bloc.
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Théo Marczak (CEO)",
      "fromEmail": "theo.marczak@lumio-health.com",
      "subject": "Opération Pulse — brief RH : 6 chantiers, 6 semaines, pas de marge",
      "date": "14 mars 2025",
      "preview": "Contrat Northgate signé : 6 chantiers RH à boucler en 6 semaines — recrutements, télétravail, handicap, paie, variable, tableau de bord.",
      "body": "Bonjour,\n\nLe contrat Northgate est signé. 40 entreprises européennes, déploiement Q2 2025 — ça ne laisse aucune place à l'approximation côté RH. J'ai besoin que tu prennes la main immédiatement sur ce qui suit.\n\n1. Recrutements : deux CDI (un CS senior, un ops) et un CDD data 6 mois. Fiches de poste, process de sélection, onboarding — tout doit être calé d'ici fin mars.\n2. Télétravail : l'équipe content et l'équipe B2B passent en hybride. Il me faut un accord ou une charte en bonne et due forme, pas un mail informel. On se couvre juridiquement.\n3. Référent handicap : Yassine est arrivé avec une RQTH. C'est bien, on l'accompagne — mais on doit aussi structurer le rôle de référent dans l'entreprise. C'est une priorité, pas une option.\n4. Collecte des données de paie : avec les nouveaux entrants et les avenants liés au télétravail, je veux un process propre. Aucun raté sur la paie d'avril.\n5. Rémunération variable : Northgate va regarder nos indicateurs de près. Il faut refondre la politique variable pour qu'elle soit lisible, motivante et cohérente avec notre trajectoire de croissance.\n6. Tableau de bord RH : je veux des métriques claires — recrutement, absentéisme, performance, diversité. Un reporting mensuel, synthétique, que je puisse montrer à Jakob sans rougir.\n\nJe sais que c'est dense. Je sais aussi qu'on n'a pas encore de DRH en titre et que tu portes beaucoup. Mais le timing est ce qu'il est — le contrat ne va pas nous attendre. On fait le point vendredi 21 mars, 9h, en présentiel.\n\nThéo\nCEO, Lumio Health\n+33 6 12 34 56 78",
      "avatar": "TM",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-08",
      "from": "Jakob Rein (Northgate, partenaire B2B)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "Stabilité des équipes Lumio — points d'attention avant déploiement Northgate Q2",
      "date": "14 mars 2025",
      "preview": "Jakob Rein demande à Théo des garanties RH formelles avant le 28 mars, craignant que la réorg interne fragilise le déploiement Northgate.",
      "body": "Théo,\n\nNous avons appris par plusieurs canaux que Lumio traverse actuellement une réorganisation interne significative — télétravail, recrutements en cours, refonte de la rémunération variable. Je veux être direct : ce contexte nous préoccupe.\n\nNorthgate a signé sur la base d'une équipe commerciale et technique identifiée, capable de délivrer sur 40 comptes européens dès avril. Toute instabilité dans vos effectifs — turnover sur les profils B2B, délais de réponse allongés, perte de continuité sur les comptes clés — aurait des conséquences directes sur notre calendrier et, je ne t'apprends rien, sur notre confiance dans le partenariat.\n\nJe souhaite recevoir avant le 28 mars un document formel précisant : les postes concernés par les recrutements en cours et leur date d'intégration prévue, les dispositions prises pour garantir la continuité de l'activité commerciale durant la transition, et les éléments structurants de votre politique RH à moyen terme.\n\nCe n'est pas une mise en demeure, Théo. C'est une demande de lisibilité. Northgate investit sur des équipes autant que sur des produits.\n\nDisponible pour un appel en début de semaine prochaine si tu le souhaites.\n\nCordialement,\nJakob Rein\nPartner — Northgate Capital\njakob.rein@northgate-capital.eu | +33 1 44 XX XX XX",
      "avatar": "JR",
      "avatarColor": "#1b4f8a",
      "unread": false,
      "flagged": false
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "PROJET",
      "title": "Projet de contrat CDI — Chargé Développement B2B + Avenant Télétravail Camille Ott",
      "accent": "#1b4f8a",
      "runningHead": "PROJET DE CONTRAT",
      "pages": [
        {
          "kicker": "DOCUMENT SOUMIS À AUDIT JURIDIQUE RH",
          "title": "Projet CDI & Avenant Télétravail — Version Cabinet Externe (14/03/2025)",
          "byline": "Cabinet Vernet & Associés · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Le présent document regroupe deux actes juridiques préparés par le cabinet Vernet & Associés pour le compte de Lumio Health SAS (SIREN 842 317 590, siège : 12 rue de la Paix, 75002 Paris). Il est transmis à la Direction pour relecture avant signature. NOTE INTERNE : ce projet comporte des points à valider impérativement avant toute diffusion aux candidats ou aux salariés concernés."
            },
            {
              "type": "h2",
              "text": "ACTE 1 — Contrat de travail à durée indéterminée : Chargé(e) de Développement B2B"
            },
            {
              "type": "p",
              "text": "ENTRE : Lumio Health SAS, représentée par M. Théo Marczak, CEO — ET : [Prénom NOM], demeurant [adresse]. POSTE : Chargé(e) de Développement B2B, statut Cadre, coefficient 2.1, classification Convention Collective Syntec (IDCC 1486). RÉMUNÉRATION : 42 000 € bruts annuels sur 12 mois, part variable jusqu'à 8 % sur objectifs trimestriels définis unilatéralement par la Direction. DATE D'ENTRÉE : 1er avril 2025. PÉRIODE D'ESSAI : 6 mois, renouvelable une fois pour une durée identique de 6 mois, soit 12 mois au total. La rupture de la période d'essai par l'employeur interviendra sans délai de prévenance. LIEU DE TRAVAIL : 12 rue de la Paix, 75002 Paris, avec déplacements fréquents en Europe. DURÉE DU TRAVAIL : 39 heures hebdomadaires, avec attribution de 22 jours de RTT annuels. CLAUSE DE NON-CONCURRENCE : interdiction d'exercer toute activité dans le secteur medtech pendant 24 mois après la rupture du contrat, sur le territoire européen, sans contrepartie financière prévue au contrat."
            },
            {
              "type": "callout",
              "text": "⚠️ ERREURS IDENTIFIÉES — ACTE 1 (à corriger avant signature) : [1] PÉRIODE D'ESSAI NON CONFORME SYNTEC : pour un cadre Syntec, la période d'essai est de 3 mois maximum, renouvelable une fois (soit 6 mois au total), et non 6+6=12 mois (art. 29 CCN Syntec + L.1221-19 Code du travail). [2] DÉLAI DE PRÉVENANCE ABSENT : en cas de rupture par l'employeur après 8 jours de présence, un délai de prévenance légal s'applique (minimum 2 semaines après 1 mois, 1 mois après 3 mois — L.1221-25). [3] CLAUSE DE NON-CONCURRENCE NULLE : absence totale de contrepartie financière, ce qui rend la clause nulle de plein droit (Cass. soc. 10 juillet 2002). [4] VARIABLE UNILATÉRAL : les objectifs conditionnant la rémunération variable ne peuvent être fixés unilatéralement ; ils doivent faire l'objet d'un accord ou être définis annuellement dans le cadre d'un entretien formalisé. [5] ABSENCE DE CLAUSE RGPD : aucune mention relative au traitement des données personnelles du salarié (obligation issue du RGPD art. 13 et CNIL recommandations employeur)."
            },
            {
              "type": "h2",
              "text": "ACTE 2 — Avenant au contrat de travail : Télétravail — Camille Ott, Responsable Partenariats B2B"
            },
            {
              "type": "p",
              "text": "ENTRE : Lumio Health SAS — ET : Mme Camille Ott, Responsable Partenariats B2B, CDI depuis le 03/06/2021. OBJET : Mise en place du télétravail à compter du 1er avril 2025. MODALITÉS : Mme Ott pourra télétravailler 'quand elle le souhaite', depuis tout lieu de son choix, sans limitation géographique. L'employeur se réserve le droit de mettre fin au télétravail à tout moment, sans délai de prévenance, par simple décision orale. Aucune plage horaire de joignabilité n'est définie. Les frais liés au télétravail (connexion, équipement) resteront à la charge exclusive de la salariée. Aucune disposition relative à la prise en charge des accidents du travail survenus au domicile n'est mentionnée. L'avenant est conclu pour une durée indéterminée sans clause de réversibilité formalisée."
            },
            {
              "type": "callout",
              "text": "⚠️ ERREURS IDENTIFIÉES — ACTE 2 (à corriger avant signature) : [1] MODALITÉS IMPRÉCISES : l'accord ou la charte télétravail doit fixer le nombre de jours télétravaillés par semaine (ANI 26/11/2020 et L.1222-9 Code du travail) — 'quand elle le souhaite' est juridiquement insuffisant. [2] LIEU DE TÉLÉTRAVAIL NON ENCADRÉ : le lieu doit être déclaré (domicile principal ou lieu tiers validé) pour couvrir la responsabilité employeur en cas d'accident du travail. [3] FIN DU TÉLÉTRAVAIL SANS PRÉAVIS : la rupture unilatérale orale sans délai de prévenance est non conforme ; un délai raisonnable (généralement 1 mois) et une forme écrite sont requis. [4] PLAGES DE JOIGNABILITÉ ABSENTES : elles sont obligatoires pour respecter le droit à la déconnexion (L.2242-17) et prévenir le risque psychosocial. [5] FRAIS À CHARGE DE LA SALARIÉE : l'employeur doit prendre en charge les coûts découlant du télétravail (L.1222-10) — clause nulle et exposant l'entreprise à un redressement URSSAF. [6] CLAUSE DE RÉVERSIBILITÉ ABSENTE : l'avenant doit prévoir les conditions de retour au présentiel à l'initiative de l'une ou l'autre partie (ANI 2020, art. 5)."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-04",
      "type": "rich",
      "tab": "EXPORT",
      "title": "Planning et données de temps de travail équipe Marketing & Content — semaines 8 à 10/2025",
      "accent": "#c4420f",
      "runningHead": "EXPORT SIRH - DONNÉES GT",
      "pages": [
        {
          "kicker": "EXPORT SIRH - DONNÉES GTA",
          "title": "Planning et données de temps de travail équipe Marketing & Content — semaines 8 à 10/2025",
          "byline": "SIRH Lumio Health (module GTA) · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "[À COMPLÉTER — paragraphe d'introduction]"
            },
            {
              "type": "h2",
              "text": "Éléments clés"
            },
            {
              "type": "p",
              "text": "[À COMPLÉTER — corps du document]"
            },
            {
              "type": "callout",
              "text": "Rôle narratif : Tableau de données brutes montrant une surcharge avérée de 3 collaborateurs (plus de 48h/semaine sur 3 semaines consécutives), des absences non justifiées et des RTT non pris. Socle factuel pour C1-4 et C1-8."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-05",
      "type": "rich",
      "tab": "BULLETIN",
      "title": "Bulletins de paie mars 2025 — Camille Ott, Yassine Morel, nouveau CDI (version à contrôler)",
      "accent": "#5b3a8a",
      "runningHead": "BULLETINS DE PAIE",
      "pages": [
        {
          "kicker": "BULLETINS DE PAIE",
          "title": "Bulletins de paie mars 2025 — Camille Ott, Yassine Morel, nouveau CDI (version à contrôler)",
          "byline": "Cabinet de paie Comptalia (prestataire externe Lumio) · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "[À COMPLÉTER — paragraphe d'introduction]"
            },
            {
              "type": "h2",
              "text": "Éléments clés"
            },
            {
              "type": "p",
              "text": "[À COMPLÉTER — corps du document]"
            },
            {
              "type": "callout",
              "text": "Rôle narratif : Trois bulletins comportant des erreurs calculatoires (IJSS non déduite, frais télétravail non intégrés, maintien de salaire Syntec mal appliqué) à identifier et corriger pour C1-6. Révèle aussi un écart de rémunération H/F non justifié activant C1-7."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-06",
      "type": "rich",
      "tab": "RAPPORT",
      "title": "Bilan RH T4 2024 et objectifs T1 2025 — Lumio Health",
      "accent": "#7a756c",
      "runningHead": "RAPPORT SIRH - DONNÉES R",
      "pages": [
        {
          "kicker": "RAPPORT SIRH — USAGE INTERNE CONFIDENTIEL",
          "title": "Bilan RH T4 2024 et objectifs T1 2025",
          "byline": "SIRH Lumio Health · Module Reporting · Extraction du 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Le présent rapport agrège les données sociales collectées sur la période octobre–décembre 2024 (T4 2024) et établit les cibles révisées pour le trimestre en cours (T1 2025). Il constitue le socle de référence pour la construction du tableau de bord RH et l'élaboration du plan d'action dans le cadre de l'Opération Pulse."
            },
            {
              "type": "h2",
              "text": "1. Indicateurs clés T4 2024 — Synthèse des écarts"
            },
            {
              "type": "p",
              "text": "Quatre indicateurs structurants ont été mesurés au 31 décembre 2024. Le taux d'absentéisme s'établit à 4,8 % contre une cible fixée à 3,5 %, soit un écart de +1,3 point. Le délai moyen de recrutement atteint 52 jours (cible : 35 jours), révélant une tension significative sur les processus de sourcing et de validation interne. Le taux de couverture formation ressort à 42 % des collaborateurs formés au cours du trimestre, très en deçà de la cible de 80 % inscrite au plan de développement des compétences 2024. Enfin, le taux de turnover annualisé s'élève à 18 %, contre une cible de 10 %, ce qui représente 7 départs sur un effectif total de 39 personnes au 31 décembre 2024."
            },
            {
              "type": "callout",
              "text": "⚠ ALERTE PRIORITAIRE — Les quatre indicateurs sont hors cible. Le binôme absentéisme élevé / turnover fort suggère un signal de surmenage organisationnel à investiguer en urgence avant la phase de recrutement Opération Pulse."
            },
            {
              "type": "h2",
              "text": "2. Analyse des causes identifiées"
            },
            {
              "type": "p",
              "text": "L'absentéisme concentre 68 % de ses occurrences sur les équipes content et B2B (respectivement Yassine Morel et deux chargés de comptes), sur des arrêts courts répétés (1 à 3 jours), indicateurs cohérents avec un contexte de surcharge de travail. Le délai de recrutement de 52 jours s'explique par l'absence de processus formalisé : aucun ATS (Applicant Tracking System) n'est actuellement déployé, et les validations de fiche de poste transitent par email avec une moyenne de 4 allers-retours avant validation. Le faible taux de formation résulte d'un sous-consommation du budget CPF interne et d'une absence de plan de formation T4 formalisé. Concernant le turnover, 5 des 7 départs relèvent de démissions volontaires, dont 3 positionnés sur des profils juniors (moins de 18 mois d'ancienneté)."
            },
            {
              "type": "h2",
              "text": "3. Objectifs T1 2025 — Cibles révisées Opération Pulse"
            },
            {
              "type": "p",
              "text": "Pour le trimestre en cours, les objectifs suivants sont posés : ramener le taux d'absentéisme à 3,8 % via un suivi mensuel des arrêts courts et la mise en place d'un référent handicap (conformément à l'obligation légale liée à l'arrivée d'un collaborateur RQTH). Réduire le délai de recrutement à 40 jours grâce au déploiement d'un processus structuré pour les trois recrutements planifiés (2 CDI + 1 CDD). Porter le taux de formation à 65 % en mobilisant le plan de formation Q1 sur les compétences digitales et managériales. Stabiliser le turnover à 14 % en fin de trimestre, objectif intermédiaire avant un retour à 10 % visé en T3 2025."
            },
            {
              "type": "callout",
              "text": "📌 RAPPEL RÉGLEMENTAIRE — L'effectif de Lumio Health (39 salariés au 31/12/2024) franchit le seuil des 20 salariés depuis 2023. L'obligation de désignation d'un référent handicap (art. L. 5213-6-1 du Code du travail) est applicable. La nomination doit être formalisée avant le 30 mars 2025."
            },
            {
              "type": "h2",
              "text": "4. Données complémentaires — Paie et masse salariale T4 2024"
            },
            {
              "type": "p",
              "text": "La masse salariale brute T4 2024 s'établit à 487 200 €, en hausse de 6,2 % par rapport à T4 2023 (458 700 €), portée par deux recrutements effectués en octobre 2024. Le taux de charges patronales moyen constaté est de 42,3 %. Aucune anomalie de paie n'a été détectée sur la période. La variable commerciale versée sur T4 2024 représente 8,1 % de la masse salariale brute, soit 39 464 €, répartis sur 9 collaborateurs éligibles. Ce ratio servira de référence pour la refonte de la politique de rémunération variable prévue dans le cadre de l'Opération Pulse."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-07",
      "type": "rich",
      "tab": "COMPTE-R",
      "title": "Compte-rendu — Réunion managers du 10 mars 2025",
      "accent": "#134547",
      "runningHead": "COMPTE-RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "DOCUMENT INTERNE — CONFIDENTIEL",
          "title": "Réunion managers du 10 mars 2025 — Résistances au projet télétravail et surcharge équipe",
          "byline": "Sonia Ferracci, Directrice Marketing · 10 mars 2025 (diffusion : 14 mars 2025)",
          "blocks": [
            {
              "type": "p",
              "text": "Participants : Théo Marczak (CEO), Sonia Ferracci (Marketing), Camille Ott (Partenariats B2B), Yassine Morel (Content — excusé, représenté par Sonia). Réunion tenue en salle Kyoto, 9h30–11h15. Ordre du jour : présentation du projet télétravail partiel dans le cadre de l'Opération Pulse, recueil des positions managériales, identification des points de blocage."
            },
            {
              "type": "h2",
              "text": "1. Réserves exprimées côté équipe Marketing & Content"
            },
            {
              "type": "p",
              "text": "J'ai posé formellement mes réserves sur le passage en télétravail 2 jours/semaine pour l'équipe content et marketing. Notre mode de travail repose sur des sessions de brainstorming courtes, non planifiées, qui alimentent directement la production éditoriale. Sur les 6 dernières semaines (janvier–mi-février), nous avons produit 14 contenus longs issus d'échanges informels en présentiel. Je ne dis pas que le télétravail est impossible, mais un passage précipité en 6 semaines, sans charte ni outillage adapté, fragilise une dynamique créative qui est, aujourd'hui, un avantage concurrentiel réel. Par ailleurs, la situation de Yassine m'inquiète : les signaux de surmenage sont visibles depuis début février. Passer en télétravail sans protocole d'accompagnement dédié pour un collaborateur en RQTH serait une erreur de gestion et un risque juridique."
            },
            {
              "type": "callout",
              "text": "Point d'alerte Sonia Ferracci : absence de charte télétravail formalisée, aucun outil de supervision adapté au travail créatif, et aucun dispositif spécifique prévu pour l'accompagnement du collaborateur RQTH (Yassine Morel) avant déploiement."
            },
            {
              "type": "h2",
              "text": "2. Risque d'inégalité soulevé par Camille Ott (Partenariats B2B)"
            },
            {
              "type": "p",
              "text": "Camille a interpellé Théo sur un angle que le projet n'avait pas encore traité : l'équité entre collaborateurs sédentaires et itinérants. Son équipe partenariats effectue en moyenne 8 à 12 déplacements clients par mois. Leur accorder 2 jours de télétravail 'fixes' ne correspond pas à leur réalité terrain — certaines semaines sont entièrement en déplacement, d'autres entièrement au bureau. Elle demande une modulation du dispositif, ou a minima une clarification écrite sur les règles applicables aux itinérants, pour éviter un sentiment d'injustice dans les équipes. Elle a utilisé le mot 'fracture' — je le retiens."
            },
            {
              "type": "callout",
              "text": "Demande formelle Camille Ott : rédiger des règles de télétravail distinctes pour les profils itinérants, avec un mécanisme de report ou de compensation mensuelle des jours non pris."
            },
            {
              "type": "h2",
              "text": "3. Décisions actées et suites attendues"
            },
            {
              "type": "p",
              "text": "Théo a pris acte des deux positions sans trancher en séance. Il a confirmé que le calendrier de 6 semaines reste la contrainte, mais a mandaté le/la chargé(e) RH pour produire : (1) une charte télétravail différenciée selon les profils (sédentaire / itinérant / RQTH), (2) un protocole d'accompagnement managérial à destination des responsables d'équipe, (3) une réponse écrite sur le statut de Yassine avant le 21 mars. Prochaine réunion de suivi fixée au 24 mars 2025."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-03",
      "title": "Dépôt RQTH et demande d'aménagement de poste",
      "date": "14 mars 2025",
      "preview": "Yassine Morel informe la RH de sa RQTH (TMS) et demande un aménagement télétravail 4j/semaine et équipement ergonomique.",
      "kicker": "NOTE INTERNE RH — CONFIDENTIEL",
      "render": "plain",
      "body": "À l'attention du service RH de Lumio Health.\n\nJe vous informe officiellement, à la date du 14 mars 2025, de ma reconnaissance en qualité de travailleur handicapé (RQTH), obtenue auprès de la MDPH de Paris. Ma RQTH couvre des troubles musculo-squelettiques affectant les membres supérieurs, compatibles avec mon poste de Content Manager mais nécessitant des adaptations ergonomiques.\n\nDans ce cadre, je sollicite formellement les aménagements suivants : (1) passage en télétravail à hauteur de 4 jours par semaine afin de limiter les trajets et d'aménager mon environnement de travail selon mes besoins ; (2) mise à disposition d'un équipement ergonomique adapté (siège, clavier, souris verticale) pour mon domicile ; (3) désignation d'un référent handicap au sein de Lumio Health comme interlocuteur dédié pour le suivi de ma situation.\n\nJe tiens à disposition les justificatifs MDPH pour tout traitement administratif. Je reste disponible pour un entretien RH à votre convenance afin d'examiner ces demandes dans les meilleurs délais.",
      "byline": "Yassine Morel (Content Manager) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Gérer l'administration du personnel et la fonction RH",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "C1-1 — Gestion des aspects juridiques et de l'organisation du travail",
        "body": "Structurez votre réponse en trois parties : (1) méthodologie de veille avec tableau sources/fréquences, (2) cartographie des évolutions légales impactantes, (3) préconisations hiérarchisées. Mentionnez explicitement la convention collective applicable à Lumio Health (Syntec ou Métallurgie) et justifiez votre choix."
      },
      {
        "titre": "C1-2 — Assurer l'application des règles sur la gestion du handicap et de la diversité",
        "body": "Pensez à distinguer les missions permanentes du référent handicap (sensibilisation, lien avec l'AGEFIPH, suivi des aménagements) des actions ponctuelles liées à la situation de Yassine. Chiffrez les aides mobilisables auprès de l'AGEFIPH pour crédibiliser vos préconisations."
      },
      {
        "titre": "C1-3 — Rédaction des contrats de travail",
        "body": "Utilisez une grille d'audit clause par clause (identification des parties, objet, durée, rémunération, convention collective, période d'essai, confidentialité, traitement des données). Pour le RGPD, vérifiez la clause de collecte et de traitement des données personnelles du salarié et sa conformité avec le RGPD et les recommandations CNIL."
      },
      {
        "titre": "C1-4 — Gestion de l'aménagement des temps de travail",
        "body": "Appuyez-vous sur les seuils légaux (durée maximale quotidienne, hebdomadaire, repos obligatoires) ET sur les dispositions spécifiques de la convention collective Syntec concernant les forfaits jours. Présentez votre nouvelle organisation sous forme de tableau comparatif avant/après avec indicateurs de charge."
      },
      {
        "titre": "C1-5 — Gestion du télétravail",
        "body": "Structurez la charte en rubriques obligatoires : éligibilité, modalités, équipements fournis, plages de joignabilité, prise en charge des frais, droit à la déconnexion. Pour les impacts RH, utilisez une matrice +/- organisée par dimension (performance, bien-être, management, culture d'entreprise). N'oubliez pas la consultation obligatoire du CSE avant mise en œuvre."
      },
      {
        "titre": "C1-6 — Collection des données de paie",
        "body": "Créez un tableau d'audit à 4 colonnes : élément de paie / valeur constatée / valeur corrigée / base légale ou conventionnelle. Vérifiez particulièrement le traitement des absences maladie (maintien de salaire Syntec, subrogation, IJSS), les congés payés acquis/pris et les frais professionnels télétravail."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Lancement Opération Pulse —",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "pdf",
            "name": "Projet CDI chargé développement",
            "app": "pdf",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "note",
            "name": "Dépôt RQTH et demande",
            "app": "notes",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "pdf",
            "name": "Planning et données de",
            "app": "pdf",
            "props": {
              "docId": "DOC-04"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Bulletins de paie mars",
            "app": "pdf",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "pdf",
            "name": "Bilan RH T4 2024",
            "app": "pdf",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Réunion managers du 10",
            "app": "pdf",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Préoccupations Northgate sur la",
            "app": "mail",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte4",
      "acte5"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Opération Pulse : restructuration RH chez Lumio Health",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
    "title": "La corbeille est vide.",
    "body": "Mais l'idée est bonne. La plupart des consultants commencent par jeter quelque chose."
  },
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bloc-1",
        "name": "projet-bloc-1"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Théo Marczak",
        "avatar": "TM",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:47",
          "text": "Bienvenue dans l'équipe {{PRENOM}} 👋 content que tu rejoignes Lumio à ce moment charnière — ça va bouger vite"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:51",
          "text": "on vient de signer avec Northgate, 40 entreprises européennes à onboarder d'ici l'été… ça veut dire recrutements, contrats, télétravail, paie variable, tout ça en parallèle — t'as 6 semaines"
        },
        {
          "from": "Théo Marczak",
          "avatar": "TM",
          "color": "#134547",
          "time": "08:54",
          "text": "j'ai besoin d'un plan RH complet sur mon bureau d'ici vendredi prochain : contrats à rédiger, organisation télétravail pour Yassine et l'équipe B2B, et une proposition sur la rémunération variable — on en parle demain 9h en visio, prépare-toi"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Théo Marczak, CEO de Lumio Health chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Opération Pulse : restructuration RH chez Lumio Health\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Théo Marczak. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/article/medtech-croissance-rh-structuration-2025",
      "author": "Margaux Thibault",
      "date": "14 mars 2025",
      "headline": "Medtech en hypercroissance : quand les RH deviennent le vrai défi de la scale-up",
      "lede": "Derrière les levées de fonds et les contrats internationaux, les startups de la santé connectée se heurtent à un obstacle souvent sous-estimé : la structuration de leur fonction RH. Un chantier aussi technique que stratégique.",
      "illustration": "PHOTO ILLUSTRATIVE",
      "body": "En 2024, les medtechs françaises ont affiché une croissance moyenne de 34 % de leurs effectifs, selon le rapport annuel de France Biotech publié en janvier dernier. Derrière ces chiffres flatteurs se cache une réalité plus complexe : beaucoup de ces entreprises abordent leur phase de scaling sans direction RH structurée, ni process documentés.\n\nLorsqu'une startup signe un contrat cadre avec un fonds ou un grand compte européen, l'afflux de recrutements peut s'avérer brutal. « On passe de cinq à vingt collaborateurs en quelques mois, et personne n'a rédigé un seul contrat de travail conforme depuis deux ans », confie un dirigeant du secteur, sous couvert d'anonymat. Les risques juridiques s'accumulent : clauses de non-concurrence mal rédigées, durée du travail non encadrée, absence de référent handicap alors même que des collaborateurs RQTH rejoignent les équipes.\n\nL'essor du télétravail partiel, devenu norme dans les équipes digitales et commerciales, complexifie encore l'équation. La loi impose depuis 2021 un accord ou une charte de télétravail formalisés, mais une étude du cabinet Syndex révèle que 41 % des PME de moins de 50 salariés n'en disposent toujours pas en 2024.\n\nLa rémunération variable est un autre point de friction. Dans les medtechs en croissance, les grilles salariales évoluent rapidement sous la pression des investisseurs et des recrutements compétitifs. Sans politique clairement définie, les inégalités internes se creusent et les tensions managériales s'installent.\n\nPlusieurs experts RH appellent à traiter la structuration administrative non pas comme une contrainte, mais comme un levier de performance. « Une paie bien collectée, des contrats sécurisés, des indicateurs RH lisibles : c'est ce qui permet à un investisseur de faire confiance à l'équipe dirigeante sur la durée », analyse Bérénice Colmont, consultante RH spécialisée dans l'accompagnement des scale-ups technologiques.\n\nLa question de la formation des managers de proximité revient également avec insistance. Dans des structures qui grandissent vite, les team leads se retrouvent propulsés dans des rôles d'encadrement sans préparation : gestion des absences, entretiens professionnels, détection des signaux de surmenage. Des responsabilités qui ne s'improvisent pas.\n\nPour les acteurs du secteur, l'enjeu des prochains mois sera de professionnaliser la fonction RH sans perdre l'agilité qui fait la force des startups. Un équilibre délicat, mais désormais incontournable."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Medtech & Droit social",
    "date": "14 mars 2025",
    "headline": "Croissance éclair dans les startups tech : quand le droit du travail devient le premier angle mort",
    "chapeau": "Portées par des levées de fonds et des contrats stratégiques, plusieurs medtechs françaises accélèrent leur recrutement sans sécuriser leurs fondations juridiques. L'Urssaf et l'inspection du travail ont ouvert 47 contrôles dans le secteur depuis janvier. Les dirigeants sous-estiment encore le coût d'un contrat mal rédigé ou d'un télétravail non encadré.",
    "body": "La croissance soudaine est rarement neutre sur le plan social. Selon une étude publiée ce jour par le cabinet Syndex, 62 % des startups françaises ayant recruté plus de cinq collaborateurs en moins de trois mois présentent au moins une irrégularité contractuelle passible de requalification. Dans le secteur des wearables et de la santé connectée, la pression des investisseurs pour déployer vite aggrave le phénomène : délais de carence CDD non respectés, clauses de rémunération variable non conformes à l'article L.3121-1 du Code du travail, accords de télétravail absents ou signés sans consultation des représentants du personnel. « On voit des entreprises qui ont levé des millions signer des contrats rédigés en deux heures », confie un inspecteur du travail sous couvert d'anonymat. Le risque est double : contentieux prud'homal d'un côté, pénalités Urssaf de l'autre. À cela s'ajoute la question du handicap au travail, désormais dans le viseur de la Halde reconstituée : l'absence de référent RQTH dans les entreprises de moins de 250 salariés n'est plus tolérée dès lors qu'un collaborateur concerné est identifié. Pour les dirigeants qui s'apprêtent à scaler, le message est sans ambiguïté : la fonction RH n'est pas un luxe de grande entreprise. C'est la condition de survie juridique d'une scale-up."
  }
};

window.PAC_CONFIG = {
  "bloc": "bloc-1",
  "titre": "Gérer l'administration du personnel et la fonction RH",
  "epreuve": "Évaluation 1 et 2",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Théo Marczak",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "note_reflexive": false,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "C1-1",
      "label": "Gestion des aspects juridiques et de l'organisation du travail",
      "libelle": "Gestion des",
      "rncp": "Adapter les procédures internes RH en assurant l'accessibilité visuelle des documents obligatoires à tous, en réalisant une veille juridique et réglementaire des évolutions légales, en participant à des événements RH et à des formations à la conformité RH, pour garantir la bonne application des règles légales au sein de l'entreprise et accompagner la direction générale dans l'application du droit du travail",
      "placeholder": "Décrivez votre méthodologie de veille juridique pour Lumio Health : sources mobilisées (Légifrance, URSSAF, conventions collectives Syntec, etc.), fréquence de mise à jour, périmètre couvert. Listez les évolutions légales récentes impactant la gestion RH de la medtech et formulez vos préconisations à destination de Théo Marczak.",
      "min": 300,
      "motsCles": [
        "veille juridique",
        "convention collective",
        "Syntec",
        "conformité",
        "accessibilité",
        "préconisations",
        "direction générale",
        "droit du travail"
      ],
      "conseil": "Structurez votre réponse en trois parties : (1) méthodologie de veille avec tableau sources/fréquences, (2) cartographie des évolutions légales impactantes, (3) préconisations hiérarchisées. Mentionnez explicitement la convention collective applicable à Lumio Health (Syntec ou Métallurgie) et justifiez votre choix."
    },
    {
      "code": "C1-2",
      "label": "Assurer l'application des règles sur la gestion du handicap et de la diversité",
      "libelle": "Assurer l'application",
      "rncp": "Assurer l'application des règles sur la gestion du handicap et de la diversité en veillant à la nomination d'un référent handicap afin de garantir la mise en œuvre d'aménagements adaptés au handicap identifié et au poste occupé",
      "placeholder": "Yassine Morel (Content Manager) vient de déposer une RQTH. Rédigez une préconisation à destination de Théo Marczak : proposez un candidat interne au rôle de référent handicap, listez ses missions, et détaillez les recommandations en matière de moyens matériels, de formation et de communication interne pour aménager le poste de Yassine.",
      "min": 180,
      "motsCles": [
        "référent handicap",
        "RQTH",
        "aménagement de poste",
        "missions",
        "formation",
        "communication interne",
        "OETH",
        "diversité"
      ],
      "conseil": "Pensez à distinguer les missions permanentes du référent handicap (sensibilisation, lien avec l'AGEFIPH, suivi des aménagements) des actions ponctuelles liées à la situation de Yassine. Chiffrez les aides mobilisables auprès de l'AGEFIPH pour crédibiliser vos préconisations."
    },
    {
      "code": "C1-3",
      "label": "Rédaction des contrats de travail",
      "libelle": "Rédaction des",
      "rncp": "Rédiger les contrats de travail, les avenants et autres documents liés à l'embauche, aux relations de travail, aux différentes situations de rupture et au suivi des collaborateurs en veillant au respect de la législation en vigueur afin de répondre aux besoins de l'entreprise et prévenir les risques et litiges juridiques",
      "placeholder": "Le document fictif DOC-02 contient un projet de CDI pour le nouveau chargé de développement B2B et un avenant de télétravail pour Camille Ott. Identifiez les erreurs juridiques et les mentions manquantes dans chaque document, corrigez-les et signalez les manquements RGPD éventuels. Rédigez également la liste des documents à remettre lors de la rupture conventionnelle envisagée pour un collaborateur en CDD.",
      "min": 280,
      "motsCles": [
        "CDI",
        "avenant",
        "mentions obligatoires",
        "RGPD",
        "rupture",
        "période d'essai",
        "convention collective",
        "prévention des litiges"
      ],
      "conseil": "Utilisez une grille d'audit clause par clause (identification des parties, objet, durée, rémunération, convention collective, période d'essai, confidentialité, traitement des données). Pour le RGPD, vérifiez la clause de collecte et de traitement des données personnelles du salarié et sa conformité avec le RGPD et les recommandations CNIL."
    },
    {
      "code": "C1-4",
      "label": "Gestion de l'aménagement des temps de travail",
      "libelle": "Gestion de",
      "rncp": "Gérer l'aménagement des temps de travail et des activités en fonction des compétences et des ressources disponibles, en s'appuyant sur les données du SIRH, en organisant le planning des collaborateurs avec les managers, et en tenant compte des réglementations propres au secteur professionnel et à la taille de l'entreprise pour optimiser la productivité et détecter les possibles surcharges de travail",
      "placeholder": "Lumio Health emploie 23 salariés. Suite au contrat Northgate, Sonia Ferracci (DirMkt) signale une surcharge de l'équipe content. À partir des données GTA du SIRH (DOC-04), proposez une nouvelle organisation du temps de travail pour l'équipe de 5 personnes sous sa responsabilité. Justifiez vos choix au regard de la réglementation applicable et démontrez l'amélioration apportée.",
      "min": 220,
      "motsCles": [
        "SIRH",
        "GTA",
        "planning",
        "surcharge de travail",
        "durée du travail",
        "forfait jours",
        "convention collective",
        "réglementation"
      ],
      "conseil": "Appuyez-vous sur les seuils légaux (durée maximale quotidienne, hebdomadaire, repos obligatoires) ET sur les dispositions spécifiques de la convention collective Syntec concernant les forfaits jours. Présentez votre nouvelle organisation sous forme de tableau comparatif avant/après avec indicateurs de charge."
    },
    {
      "code": "C1-5",
      "label": "Gestion du télétravail",
      "libelle": "Gestion du",
      "rncp": "Gérer l'organisation du télétravail en s'assurant du respect des obligations légales, en rédigeant une charte qui explicite le cadre des règles du travail à distance au sein de l'entreprise, en proposant aux managers des formations à la gestion des équipes à distance et en veillant à ce que l'ensemble des collaborateurs disposent des outils nécessaires (matériels et logiciels), pour favoriser un esprit de coopération et la cohésion des équipes de travail et la mise en œuvre du télétravail",
      "placeholder": "Théo Marczak souhaite instaurer 2 jours de télétravail hebdomadaires pour les équipes Content et B2B (8 personnes). Rédigez les éléments clés de la charte télétravail de Lumio Health, identifiez les impacts RH positifs et négatifs de ce changement, listez les obligations légales à respecter (consultation CSE, protection des données) et formulez 3 recommandations de bonnes pratiques à destination de Sonia Ferracci et Camille Ott.",
      "min": 260,
      "motsCles": [
        "charte télétravail",
        "CSE",
        "obligations légales",
        "outils collaboratifs",
        "RGPD",
        "cohésion d'équipe",
        "bonnes pratiques",
        "management à distance"
      ],
      "conseil": "Structurez la charte en rubriques obligatoires : éligibilité, modalités, équipements fournis, plages de joignabilité, prise en charge des frais, droit à la déconnexion. Pour les impacts RH, utilisez une matrice +/- organisée par dimension (performance, bien-être, management, culture d'entreprise). N'oubliez pas la consultation obligatoire du CSE avant mise en œuvre."
    },
    {
      "code": "C1-6",
      "label": "Collection des données de paie",
      "libelle": "Collection des",
      "rncp": "Collecter les éléments fixes et variables de la paie et les données de la gestion des temps et des activités pour chaque collaborateur en alimentant le SIRH et en assurant le suivi avec le service paie ou avec le cabinet externe, pour garantir la fiabilité de la rémunération",
      "placeholder": "Le document DOC-05 contient 3 bulletins de paie de mars 2025 (Camille Ott, Yassine Morel, un nouveau CDI). Auditez ces bulletins : identifiez les éléments fixes et variables présents et manquants, repérez les erreurs de calcul (charges sociales, absences, IJSS) et rédigez un tableau correctif avec justifications.",
      "min": 240,
      "motsCles": [
        "éléments variables",
        "éléments fixes",
        "IJSS",
        "charges sociales",
        "RTT",
        "absences",
        "conformité",
        "SIRH"
      ],
      "conseil": "Créez un tableau d'audit à 4 colonnes : élément de paie / valeur constatée / valeur corrigée / base légale ou conventionnelle. Vérifiez particulièrement le traitement des absences maladie (maintien de salaire Syntec, subrogation, IJSS), les congés payés acquis/pris et les frais professionnels télétravail."
    },
    {
      "code": "C1-7",
      "label": "Contribution à la politique de rémunération",
      "libelle": "Contribution à",
      "rncp": "Contribuer à définir une politique de rémunération adaptée aux besoins de l'entreprise en mobilisant les dispositifs de rémunération monétaires et non monétaires, en veillant au respect du principe de non-discrimination, et en mobilisant les indicateurs de satisfaction interne, afin que la paie constitue un levier pour la gestion de l'entreprise en tant que source de performance, de motivation et d'égalité sociale",
      "placeholder": "Suite au contrat Northgate, Théo Marczak veut créer un système de rémunération variable pour l'équipe commerciale B2B (Camille Ott + 3 nouveaux). Proposez une politique de rémunération (fixe, variable, non financier) adaptée à Lumio Health, argumentez vos choix en termes de motivation et garantissez le respect de l'égalité H/F et de la non-discrimination.",
      "min": 200,
      "motsCles": [
        "rémunération variable",
        "non monétaire",
        "égalité H/F",
        "non-discrimination",
        "motivation",
        "performance",
        "index Pénicaud",
        "benchmark"
      ],
      "conseil": "Articulez votre politique autour de 3 leviers : (1) fixe sécurisé au-dessus du marché medtech, (2) variable collectif lié à l'atteinte des objectifs Northgate, (3) avantages non financiers (télétravail, formation, CESU). Intégrez une grille de rémunération sexuellement neutre et mentionnez l'obligation de calcul de l'index Pénicaud pour les entreprises de plus de 50 salariés."
    },
    {
      "code": "C1-8",
      "label": "Mesure de la performance RH",
      "libelle": "Mesure de",
      "rncp": "Mesurer la performance RH en élaborant des indicateurs de performance et en constituant des tableaux de bord au moyen des données du SIRH, pour construire des plans d'action et des notes de reporting à destination de la DRH visant à réduire les écarts avec les objectifs de l'entreprise",
      "placeholder": "À partir des données SIRH de Lumio Health (DOC-06), construisez un tableau de bord RH avec au minimum 6 indicateurs pertinents couvrant : rémunération/masse salariale, absentéisme, recrutement, formation et télétravail. Commentez les écarts avec les objectifs fixés par Théo Marczak et proposez deux actions correctives prioritaires.",
      "min": 220,
      "motsCles": [
        "tableau de bord RH",
        "indicateurs",
        "absentéisme",
        "masse salariale",
        "SIRH",
        "reporting",
        "écarts",
        "objectifs RH"
      ],
      "conseil": "Pour chaque indicateur, précisez : intitulé / formule de calcul / valeur actuelle / valeur cible / écart / source SIRH. Choisissez des indicateurs SMART (ex. : taux d'absentéisme < 3,5 %, délai moyen de recrutement < 35 jours, taux de complétion des formations > 80 %). Votre tableau de bord doit permettre une lecture rapide par Théo Marczak."
    },
    {
      "code": "C1-9",
      "label": "Conduite du plan d'action d'un projet RH",
      "libelle": "Conduite du",
      "rncp": "Conduire le plan d'action d'un projet RH (transformation digitale des services RH, télétravail, marque employeur, etc.) en contrôlant la mobilisation des ressources matérielles et financières allouées, en veillant au respect des étapes et échéances fixées par le planning, à l'implication des parties prenantes, aux enjeux individuels et en accompagnant le changement induit par des actions de communication pour garantir le succès du projet",
      "placeholder": "Rédigez une note de pilotage du projet 'Opération Pulse' à destination de Théo Marczak. Identifiez les écarts de performance RH actuels, fixez de nouveaux objectifs RH, détaillez au moins deux actions concrètes (outils SIRH, formation managers, réorganisation) et présentez un diagramme de Gantt sur 6 semaines couvrant les étapes clés.",
      "min": 280,
      "motsCles": [
        "plan d'action",
        "Gantt",
        "parties prenantes",
        "jalons",
        "ressources",
        "accompagnement du changement",
        "communication",
        "pilotage"
      ],
      "conseil": "Votre note doit suivre la structure : contexte → écarts constatés → objectifs révisés → plan d'action détaillé (action / responsable / délai / ressources / indicateur de succès) → Gantt. Intégrez une ligne 'accompagnement au changement' dans le Gantt avec des jalons de communication interne (kick-off, points d'étape, bilan)."
    },
    {
      "code": "C1-10",
      "label": "Organisation du travail au sein de l'équipe RH",
      "libelle": "Organisation du",
      "rncp": "Organiser le travail au sein de l'équipe RH sous l'autorité de la DRH en veillant à une répartition équitable du travail, en explicitant les procédures RH internes, en communiquant avec son équipe et en menant des réunions inclusives de régulation et de cohésion, afin de permettre aux collaborateurs d'évoluer en confiance dans un esprit de bien-être au travail",
      "placeholder": "L'équipe RH de Lumio Health est composée de vous-même (chargé(e) RH), d'une assistante RH en alternance et d'une gestionnaire paie à 80 %. Répartissez les tâches liées à l'Opération Pulse entre ces trois personnes en tenant compte des compétences et des charges respectives. Définissez des indicateurs de suivi hebdomadaires et rédigez l'ordre du jour de la réunion de lancement.",
      "min": 200,
      "motsCles": [
        "répartition des tâches",
        "charge de travail",
        "compétences",
        "indicateurs de suivi",
        "réunion inclusive",
        "bien-être au travail",
        "procédures internes"
      ],
      "conseil": "Présentez la répartition sous forme de tableau RACI simplifié (Responsable / Approbateur / Consulté / Informé) pour chaque tâche du projet. Vos indicateurs de suivi doivent être vérifiables chaque semaine (ex. : nombre de contrats relus, bulletins audités, formations planifiées). Intégrez un temps d'expression libre dans l'ordre du jour de la réunion de lancement."
    },
    {
      "code": "C1-11",
      "label": "Formation des managers",
      "libelle": "Formation des",
      "rncp": "Former les managers en les sensibilisant à leur mission RH de premier niveau et à la prise en charge des situations de handicap, en les associant au processus décisionnel RH et en harmonisant les process RH/Management pour aligner respect des mesures réglementaires, engagement collaborateur et objectifs de chiffre d'affaires",
      "placeholder": "Préparez le plan d'animation de la réunion de sensibilisation RH que vous organisez avec Sonia Ferracci et Camille Ott (les deux managers de l'entreprise). Cette réunion doit couvrir : la mission RH de premier niveau, la gestion de la RQTH de Yassine, le télétravail et les nouvelles règles d'organisation. Structurez l'animation pour qu'elle soit inclusive et anticipez les résistances probables.",
      "min": 200,
      "motsCles": [
        "plan d'animation",
        "réunion inclusive",
        "brise-glace",
        "mission RH premier niveau",
        "handicap",
        "résistances au changement",
        "feedback",
        "harmonisation"
      ],
      "conseil": "Votre plan d'animation doit indiquer pour chaque séquence : durée / objectif / méthode pédagogique / matériel. Prévoyez un icebreaker ancré dans l'univers Lumio (ex. : quiz sur les données de stress au travail issues des wearables). Pour les résistances, utilisez une grille argument/contre-argument préparée à l'avance."
    },
    {
      "code": "C1-12",
      "label": "Animation d'une équipe RH",
      "libelle": "Animation d'une",
      "rncp": "Organiser le travail au sein de l'équipe RH sous l'autorité de la DRH en veillant à une répartition équitable du travail, en explicitant les procédures RH internes, en communiquant avec son équipe et en menant des réunions inclusives de régulation et de cohésion",
      "placeholder": "Rédigez le compte-rendu structuré de la première réunion hebdomadaire de l'équipe RH Lumio Health (vous + alternante + gestionnaire paie). Cette réunion avait pour objectifs : bilan d'avancement de l'Opération Pulse, résolution d'un blocage sur la conformité des bulletins de paie, planification de la semaine suivante.",
      "min": 150,
      "motsCles": [
        "compte-rendu",
        "objectifs de réunion",
        "points d'avancement",
        "décisions prises",
        "actions suivantes",
        "inclusivité",
        "régulation"
      ],
      "conseil": "Un bon compte-rendu de réunion RH comprend : présents/absents, rappel des objectifs, synthèse des échanges par point à l'ordre du jour, décisions actées avec responsable et délai, prochaine réunion. Soignez le ton : il doit refléter une culture de confiance et de transparence propre à une équipe RH performante."
    },
    {
      "code": "C1-13",
      "label": "Accompagnement des managers de l'entreprise",
      "libelle": "Accompagnement des",
      "rncp": "Former les managers en les sensibilisant à leur mission RH de premier niveau et à la prise en charge des situations de handicap",
      "placeholder": "Rédigez un plan d'accompagnement au changement pour Sonia Ferracci et Camille Ott dans le cadre de l'Opération Pulse. Identifiez au moins deux situations impactées par le projet (ex. : intégration de la RQTH de Yassine, passage en télétravail partiel), anticipez les réactions probables de chaque manager et proposez des arguments motivants et des actions concrètes de soutien.",
      "min": 200,
      "motsCles": [
        "plan d'accompagnement",
        "gestion du changement",
        "situations impactées",
        "managers",
        "résistances",
        "arguments",
        "RQTH",
        "télétravail"
      ],
      "conseil": "Structurez votre plan par manager (Sonia / Camille), puis par situation. Pour chaque situation : description de l'impact → réaction anticipée → argument RH mobilisé → action d'accompagnement → indicateur de succès. Montrez que vous comprenez les enjeux métiers de chaque manager (marketing vs B2B) pour personnaliser votre accompagnement."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bloc-1 (Responsable Ressources Humaines).\nContexte : Opération Pulse : restructuration RH chez Lumio Health · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Aucune méthodologie de veille juridique n'est formalisée (absence de sources, de fréquence ou de périmètre défini) : le critère de conformité légale est considéré comme non atteint.\n- Le plan d'action RH (C1-9) ne comporte pas au moins deux actions détaillées et argumentées assorties d'un Gantt avec jalons identifiables : la compétence de pilotage de projet est invalidée.\n- Les rôles et responsabilités des acteurs RH (référent handicap, managers, équipe RH) ne sont pas clairement distingués et attribués dans l'ensemble du dossier : la compétence d'organisation du travail et de formation des managers est considérée comme non démontrée.\n- Aucun indicateur d'impact mesurable (quantitatif ou qualitatif) n'est associé aux actions préconisées dans le tableau de bord ou le plan d'action : la compétence de mesure de la performance RH est invalidée.\n- Les bulletins de paie (C1-6) ne font l'objet d'aucun contrôle de conformité légale et conventionnelle formalisé : la compétence de collecte des données de paie est considérée comme non atteinte.\n- L'absence totale de référence à la convention collective applicable à Lumio Health dans les contrats, la paie ou l'organisation du travail constitue un critère éliminatoire transversal sur l'ensemble du bloc.\n- Le plan d'accompagnement des managers (C1-13) n'identifie aucune situation concrète liée au projet et ne formule aucun argument adapté aux profils de Sonia Ferracci et Camille Ott : la compétence est invalidée.\n\nRéponds EXACTEMENT dans ce format :\n### C1-1 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-2 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-3 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-4 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-5 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-6 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-7 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-8 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-9 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-10 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-11 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-12 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C1-13 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
