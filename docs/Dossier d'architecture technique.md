---
tags:
  - dossier
  - architecture
  - technique
  - dat
---
---
### INFOS DE BASE

**Version :** 1.1 (Final)  
**Date :** 27 Novembre 2025  
**Auteur :** [Votre Nom/Agence], Architecte Projet  
**Statut :** Approuvé pour Développement

---
### 1. Introduction et Objectifs

Ce document est le référentiel technique pour le développement du site web de Kalia Beauty Studio. Il a pour but de :
*   **Guider l'équipe de développement** en fournissant une vision claire de l'architecture et des standards à respecter.
*   **Justifier les choix technologiques** fondamentaux pour garantir la performance, la sécurité et la maintenabilité à long terme, en alignement avec les objectifs business.
*   **Assurer la cohérence du code** et de la structure du projet.

---
### 2. Vue d'Ensemble de l'Architecture (Headless / Jamstack)

L'architecture retenue est une architecture **Headless** qui découple totalement le back-office (gestion de contenu) du front-end (site visible par l'utilisateur). Cette approche est non-négociable pour atteindre les objectifs de performance et de sécurité fixés.

**Diagramme de flux simplifié :**

```
+-----------------+      +----------------+
[Contributeur Kalia] -> | CMS Sanity.io | ---> | GitHub |  
| (Édition Contenu) | | (Code Source) |  
+-----------------+ +-------+--------+  
|  
| (Webhook Trigger)  
v  
+------+-------+  
| Vercel |  
| (Build & Host) |  
+------+-------+  
|  
+----------+ (HTTPS Request) | (Static Files via CDN)  
| Visiteur | <-------------------------------------+  
+----------+
```

**Description du flux :**
1.  **Gestion de contenu :** L'équipe de Kalia met à jour le contenu via l'interface web de Sanity.io.
2.  **Déclenchement :** La publication sur Sanity envoie un webhook à Vercel.
3.  **Build :** Vercel récupère le code sur GitHub, contacte l'API de Sanity pour le contenu, et génère un site 100% statique.
4.  **Distribution :** Vercel déploie ces fichiers statiques sur son CDN global, garantissant des temps de chargement optimaux.

---
### 3. Architecture Decision Records (ADR)

**ADR-001 : Framework Frontend - Next.js (React)**
*   **Décision :** Utiliser **Next.js** avec l'App Router.
*   **Justification :** Nécessaire pour atteindre le KPI de performance (PageSpeed > 90) grâce à la génération de sites statiques (SSG). L'optimisation d'images (`next/image`) et le routing basé sur les fichiers sont parfaitement alignés avec les besoins du projet.
*   **Alternatives écartées :** Astro (écosystème moins mature pour une future évolution complexe), Gatsby (moins flexible que Next.js).

**ADR-002 : CMS Headless - Sanity.io**
*   **Décision :** Utiliser **Sanity.io** pour la gestion de contenu.
*   **Justification :** Répond à l'exigence de sécurité maximale en découplant l'interface d'administration. Permet une modélisation de contenu sur-mesure (décrite dans le CDF) et offre une excellente expérience d'édition pour le client.
*   **Alternatives écartées :** Strapi (nécessite la gestion de l'hébergement et de la BDD), Contentful (plus coûteux pour des besoins similaires).

**ADR-003 : Plateforme de Déploiement - Vercel**
*   **Décision :** Utiliser **Vercel** pour l'hébergement et le déploiement.
*   **Justification :** Intégration native avec Next.js. Le processus de CI/CD automatisé à partir de Git garantit la fiabilité et la simplicité de maintenance. Le CDN global et les Serverless Functions (pour le formulaire) répondent aux besoins de performance et de scalabilité.
*   **Alternatives écartées :** Netlify (très similaire mais Vercel est optimisé pour Next.js), AWS Amplify (complexité de configuration superflue pour ce projet).

---
### 4. Structure des Fichiers du Projet (Next.js App Router)

La structure des dossiers est une traduction directe de l'arborescence et du Design System.

```
kalia-website/  
├── public/ # Favicons, polices locales, robots.txt  
├── src/  
│ ├── app/ # Routing principal  
│ │ ├── (pages)/ # Groupement des pages du site  
│ │ │ ├── page.tsx # Page d'accueil (/)  
│ │ │ ├── prestations/  
│ │ │ │ ├── page.tsx # /prestations  
│ │ │ │ └── [slug]/  
│ │ │ │ └── page.tsx # /prestations/[slug]  
│ │ │ ├── galerie/page.tsx  
│ │ │ ├── le-salon/page.tsx  
│ │ │ └── contact/page.tsx  
│ │ ├── api/ # Route handlers (ex: pour le formulaire)  
│ │ │ └── contact/route.ts  
│ │ ├── layout.tsx # Layout racine (<html>, <body>)  
│ │ └── globals.css # Styles globaux Tailwind  
│ │  
│ ├── components/ # Composants React réutilisables  
│ │ ├── ui/ # Atomes du Design System (Button.tsx, Card.tsx, Input.tsx...)  
│ │ ├── layout/ # Molécules de structure (Navbar.tsx, Footer.tsx, Section.tsx...)  
│ │ └── icons/ # Composants d'icônes (si non-inline)  
│ │  
│ ├── lib/ # Librairies, clients et utilitaires  
│ │ └── sanity.ts # Configuration du client et requêtes Sanity  
│ │  
│ └── types/ # Définitions TypeScript  
│ └── sanity.ts # Types générés à partir du schéma Sanity (Service, TeamMember...)  
│  
├── .eslintrc.json # Configuration ESLint  
├── next.config.js # Configuration de Next.js  
├── package.json  
├── tailwind.config.ts # Configuration de Tailwind CSS (tokens du Design System)  
└── tsconfig.json # Configuration TypeScript
```

---
### 5. Conventions et Standards de Développement

1.  **Langage :** **TypeScript** (`strict: true`). Tout nouveau code doit être typé.
2.  **Styling :** **Tailwind CSS**. L'utilisation de classes CSS arbitraires est proscrite. Tous les styles doivent provenir des tokens définis dans `tailwind.config.ts`, qui est la traduction du Design System.
3.  **Qualité de Code :** **ESLint** et **Prettier** sont configurés et obligatoires. Un hook de pre-commit (via Husky) formatera et validera le code avant chaque commit.
4.  **Gestion des Données :** Toutes les requêtes vers Sanity doivent être centralisées dans `src/lib/sanity.ts` et être typées en utilisant les définitions de `src/types/sanity.ts`.
5.  **Composants :** Les composants doivent être "stupides" (stateless) autant que possible. La logique de récupération de données doit rester dans les pages (Server Components).
6.  **Gestion des Secrets :** Toutes les clés d'API et variables sensibles doivent être gérées via des variables d'environnement (`.env.local` pour le développement, secrets Vercel pour la production). Aucun secret ne doit être commit sur Git.
7.  **Git Flow :**
    *   `main` : Branche de production. Déploiement automatique sur l'URL principale.
    *   `develop` : Branche d'intégration. Déploiement automatique sur une URL de pré-production.
    *   `feature/[nom-feature]` : Branches de travail. Chaque Pull Request vers `develop` doit être validée par une revue de code.

---
### 6. Flux de Données du Formulaire de Contact

Pour des raisons de sécurité, le formulaire de contact ne communiquera pas directement avec un service de messagerie depuis le client.

1.  L'utilisateur soumet le formulaire sur le client (React).
2.  Une requête `POST` est envoyée à notre propre endpoint d'API : `/api/contact`.
3.  Le Route Handler de Next.js (Server-side) reçoit la requête, valide les données (ex: reCAPTCHA si nécessaire) et utilise un service transactionnel d'email (ex: Resend, Postmark) pour envoyer l'email de notification à Kalia Studio.
4.  Le serveur renvoie une réponse de succès ou d'échec au client, qui affiche le message approprié.