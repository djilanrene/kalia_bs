---
tags:
  - brief
  - projet
  - cadrage
  - architecture
projet: Kalia Beauty Studio - Site Vitrine Premium
client: Direction de Kalia Beauty Studio
version: 1
date: 27 Novembre 2025
---
### Résumé Exécutif

Ce document définit le cadre stratégique, fonctionnel et technique pour la création du site vitrine de Kalia Beauty Studio. Le projet vise à combler l'écart entre l'ambition premium du salon et sa présence digitale actuelle. La solution préconisée est un site web sur-mesure, bâti sur une architecture moderne (Headless/Jamstack), conçu pour offrir une expérience utilisateur impeccable, refléter l'excellence de la marque, et fonctionner comme un outil efficace de génération de rendez-vous qualifiés. Ce brief établit le périmètre, les objectifs mesurables, la feuille de route technique et les livrables attendus pour garantir une production maîtrisée et un résultat à la hauteur des ambitions du salon.

---

### 1. Vision & Contexte Stratégique (Le "Pourquoi")

**A. Diagnostic**

Kalia Beauty Studio aspire à être la référence de la beauté haut de gamme à Lomé, en se fondant sur des piliers d'expertise, d'hygiène et de qualité. Cependant, son empreinte digitale actuelle (absence de site, photos inégales, réservations manuelles) ne reflète pas ce positionnement et freine sa croissance.

**B. Mission du Projet**

Construire le **vaisseau amiral digital** de la marque Kalia Beauty Studio. Le site ne sera pas une simple brochure en ligne, mais une extension de l'expérience vécue au salon : premium, rassurante et centrée sur le client. Il doit informer, inspirer confiance et convertir les visiteurs en clients fidèles.

---

### 2. Objectifs & Mesure du Succès (Les KPIs)

Le succès du projet sera mesuré par l'atteinte des indicateurs de performance (KPIs) SMART suivants :

| Catégorie | KPI | Objectif |
| :--- | :--- | :--- |
| **Business** | **Génération de Leads Qualifiés** | Atteindre **15 demandes de réservation/mois** via le site dans les 3 mois post-lancement. |
| **Engagement** | **Qualité de l'Expérience Utilisateur** | Maintenir un **taux d'engagement supérieur à 60%** (Google Analytics 4). |
| **Acquisition** | **Visibilité SEO Locale** | Se classer dans le **Top 5 sur Google** pour "salon de beauté premium Lomé" en 6 mois. |
| **Technique** | **Performance & Vitesse** | Maintenir un **score PageSpeed Insights supérieur à 90/100** en permanence. |

---

### 3. Périmètre Fonctionnel (Le "Quoi")

Le projet se concentrera sur un **Produit Minimum Viable (MVP)** robuste, conçu autour d'un parcours utilisateur intuitif.

**A. Arborescence du Site**

La navigation sera simple et prévisible, structurée comme suit :

*   **/accueil** : Hub central présentant la proposition de valeur.
*   **/prestations** : Catalogue des catégories de services.
    *   **/prestations/[nom-du-service]** : Page de détail exhaustive pour chaque prestation.
*   **/galerie** : Portfolio visuel filtrable.
*   **/le-salon** : Histoire, équipe et valeurs.
*   **/contact** : Formulaire de réservation et informations pratiques.

**B. Fonctionnalités Clés du MVP**

1.  **Page d'Accueil Stratégique :** Présentation immersive, points de différenciation, preuve sociale (témoignages) et CTA clair vers la réservation.
2.  **Catalogue de Prestations Détaillé :** Chaque service disposera de sa propre page incluant : description complète, bénéfices, durée, prix, et visuels de haute qualité.
3.  **Galerie d'Inspiration :** Portfolio des réalisations, filtrable par catégorie pour une recherche ciblée.
4.  **Présentation du Salon :** Section "À Propos" pour humaniser la marque, présenter l'équipe et le lieu.
5.  **Système de Réservation (MVP) :** Formulaire de contact intelligent et simple, dirigeant les demandes vers l'équipe du salon pour une confirmation manuelle.

---

### 4. Architecture Technique Recommandée (Le "Comment")

Pour garantir une sécurité, une performance et une évolutivité maximales, une architecture **Headless / Jamstack** est préconisée. Cette approche est supérieure à une solution WordPress monolithique pour ce projet.

| Composant | Outil Recommandé | Justification |
| :--- | :--- | :--- |
| **Framework Frontend** | **Next.js (React)** | Performance (site statique), SEO excellent, écosystème robuste. |
| **CMS (Back-Office)** | **Sanity.io** | Sécurité (découplage), expérience d'édition intuitive, flexibilité totale. |
| **Hébergement** | **Vercel** | Déploiement continu, scalabilité mondiale (CDN), performances optimales. |

**Bénéfices de cette stack :**
*   **Sécurité Renforcée :** La surface d'attaque est quasi-nulle.
*   **Vitesse de Chargement Instantanée :** Crucial pour l'expérience premium et le référencement.
*   **Maintenabilité et Évolutivité :** Le socle est propre et prêt à intégrer de futures fonctionnalités (réservation en ligne avancée, e-commerce) sans compromis.

---

### 5. Livrables de Spécification (Le Plan de Construction)

La phase de production sera précédée par la livraison et la validation des documents d'architecture suivants pour garantir un alignement parfait :

1.  **Cahier des Charges Fonctionnel Détaillé** (incluant toutes les User Stories).
2.  **Wireframes UX** (plans de chaque page).
3.  **Maquettes Graphiques UI & Design System**.
4.  **Dossier d'Architecture Technique**.
5.  **Modèle de Données du CMS**.
6.  **Stratégie de Test & Cahier de Recette**.

---

### 6. Prochaines Étapes

1.  **Validation de ce brief** par la direction de Kalia Beauty Studio.
2.  **Organisation d'un atelier de cadrage** pour finaliser les détails fonctionnels et le contenu.
3.  **Phase 1 :** Design (UX/UI) et création du Design System.
4.  **Phase 2 :** Développement (Frontend et configuration du CMS).
5.  **Phase 3 :** Tests, recette et mise en production.