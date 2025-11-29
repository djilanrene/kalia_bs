---
tags:
  - cahier-des-charges
  - kalia
---
---

**Version :** 1.0  
**Date :** 27 Novembre 2025  
**Auteur :** Junior DJILAN, Architecte Projet
**Client :** Direction de Kalia Beauty Studio

---
### 0. Préambule et Résumé Exécutif

Ce document constitue la spécification fonctionnelle complète pour la conception et le développement du site web de Kalia Beauty Studio. Il traduit la vision stratégique d'un positionnement premium en un ensemble de fonctionnalités, de parcours utilisateurs et d'exigences techniques précises.

L'objectif est de construire un actif digital performant, sécurisé et évolutif qui sert de référence pour la marque, inspire confiance aux clients potentiels et fonctionne comme un canal efficace pour la génération de rendez-vous qualifiés. Ce document servira de source de vérité unique pour toutes les parties prenantes tout au long du cycle de vie du projet.

---
### 1. Contexte et Vision du Projet

Kalia Beauty Studio vise à s'établir comme le leader de la beauté haut de gamme à Lomé. Le projet digital actuel a pour mission de construire le "vaisseau amiral" de la marque en ligne, en comblant le fossé entre une ambition d'excellence et une présence web inexistante. Le site doit incarner les valeurs du salon : expertise, hygiène, qualité et expérience client irréprochable.

---
### 2. Objectifs et Mesure du Succès (KPIs)

Le succès du projet sera évalué sur la base des indicateurs de performance SMART suivants, mesurés après la mise en production :

| Catégorie | KPI | Objectif à atteindre |
| :--- | :--- | :--- |
| **Business** | Génération de Leads Qualifiés | Atteindre **15 demandes de réservation/mois** via le site (3 mois post-lancement). |
| **Opérationnel** | Optimisation du temps de travail | Réduire de **25%** le temps passé au téléphone pour des demandes d'information basiques (2 mois post-lancement). |
| **Engagement** | Qualité de l'Expérience Utilisateur | Maintenir un **taux d'engagement > 60%** dans Google Analytics 4 (moyenne sur 6 mois). |
| **Acquisition** | Visibilité SEO Locale | Se classer dans le **Top 5 sur Google** pour "salon de beauté premium Lomé" (6 mois post-lancement). |
| **Technique** | Performance & Vitesse | Maintenir un **score PageSpeed Insights > 90/100** en permanence. |

---
### 3. Cibles et Personas

Le site est principalement destiné au persona suivant :

*   **Nom :** Amina
*   **Profil :** Femme active, 25-45 ans, CSP+, vivant à Lomé.
*   **Comportement :** Digital native, utilise Instagram pour l'inspiration, valorise la qualité, la propreté et l'expertise. Elle est prête à payer un prix premium pour un service irréprochable et une expérience relaxante.
*   **Pain Points :** Manque de transparence sur les prix et les détails des soins dans les salons locaux, peur du manque d'hygiène, perte de temps avec les réservations manuelles par téléphone.
*   **Objectif :** Trouver un salon de confiance qui comprend ses besoins, lui offre des résultats visibles et un processus de réservation simple.

---
### 4. Périmètre Fonctionnel (MVP - Minimum Viable Product)

#### 4.1. Arborescence du Site (Sitemap)

```
/ (Accueil)  
├── /prestations  
│ ├── /prestations/[slug-service-1] (ex: /prestations/balayage-lumiere)  
│ └── /prestations/[slug-service-2]  
├── /galerie  
├── /le-salon  
└── /contact
```

#### 4.2. Spécifications Détaillées par Module

##### Module 1 : Page d'Accueil (`/`)
*   **User Story 1.1 :** En tant que nouvelle visiteuse, je veux comprendre immédiatement la promesse premium du salon et voir ses points forts, afin de décider si je dois continuer ma visite.
*   **Critères d'Acceptation :**
    1.  Un "Hero Banner" plein écran avec une photo/vidéo professionnelle.
    2.  Un titre principal (H1) clair et inspirant.
    3.  Une section "Proposition de Valeur" avec 3 icônes/blocs (ex: "Expertise", "Hygiène", "Produits d'Exception").
    4.  Une section présentant visuellement les 3-4 catégories de services principales, avec un lien vers la page `/prestations`.
    5.  Une section "Témoignages" avec 2-3 citations de clients.
    6.  Un appel à l'action (CTA) "Prendre Rendez-vous" visible en permanence dans le header.

##### Module 2 : Catalogue des Prestations (`/prestations` et `prestations/[slug]`)
*   **User Story 2.1 :** En tant que cliente, je veux voir une liste claire des prestations avec leur prix et durée, afin de comparer et choisir ce qui me convient.
*   **Critères d'Acceptation (Page de listing `/prestations`) :**
    1.  Les services sont regroupés par catégories claires (Coiffure, Soins Visage, etc.).
    2.  Chaque service est présenté dans une "carte" avec : photo, titre, description courte, prix "à partir de", et un bouton "Voir le détail".

*   **User Story 2.2 :** En tant que cliente intéressée par un soin spécifique, je veux accéder à une page dédiée qui m'explique tous les détails, afin de me sentir totalement informée avant de réserver.
*   **Critères d'Acceptation (Page de détail `prestations/[slug]`) :**
    1.  Le titre du service, le prix exact et la durée sont visibles en haut de page.
    2.  Une galerie d'images ou une image principale illustrant le résultat.
    3.  Une description complète : bénéfices, déroulé du soin, produits utilisés, pour qui ?
    4.  Un CTA contextuel "Réserver ce soin" qui redirige vers la page `/contact`.

##### Module 3 : Galerie (`/galerie`)
*   **User Story 3.1 :** En tant que cliente potentielle, je veux voir une galerie de photos du travail réel du salon, afin de juger de la qualité et de trouver l'inspiration.
*   **Critères d'Acceptation :**
    1.  La galerie affiche les images dans une grille élégante.
    2.  Des boutons de filtre (ex: "Tout", "Coiffure", "Maquillage") permettent de trier les photos sans recharger la page.
    3.  Un clic sur une miniature ouvre l'image en grand dans une "lightbox" navigable.

##### Module 4 : Le Salon (`/le-salon`)
*   **User Story 4.1 :** En tant que personne cherchant la confiance, je veux en savoir plus sur l'histoire du salon et son équipe, afin de me sentir connectée à la marque.
*   **Critères d'Acceptation :**
    1.  Une section "Notre Histoire" avec le mot de la fondatrice.
    2.  Une section "L'Équipe" présentant les membres clés avec photo et spécialité.
    3.  Une section "Le Lieu" avec des photos de l'environnement du salon.

##### Module 5 : Contact & Réservation (`/contact`)
*   **User Story 5.1 :** En tant que cliente décidée, je veux envoyer une demande de réservation via un formulaire simple, afin de pouvoir le faire à n'importe quelle heure sans appeler.
*   **Critères d'Acceptation :**
    1.  Le formulaire contient les champs : Nom, Téléphone, Email, Service souhaité (liste déroulante), Message.
    2.  Validation des champs en temps réel (ex: format email).
    3.  Après envoi, un message de succès clair s'affiche, indiquant les prochaines étapes ("Nous vous recontacterons sous 24h...").
    4.  La page affiche également l'adresse complète, les horaires, le numéro de téléphone (cliquable sur mobile) et une carte Google Maps intégrée.

---
### 5. Spécifications Non-Fonctionnelles

1.  **Performance :** Le site doit atteindre un score Google PageSpeed Insights supérieur à 90/100. Le Largest Contentful Paint (LCP) doit être inférieur à 2.5 secondes.
2.  **Sécurité :** L'architecture Headless sera mise en œuvre pour découpler le back-office du front-end, minimisant la surface d'attaque. Toutes les communications se feront en HTTPS (certificat SSL).
3.  **Compatibilité :** Le site doit s'afficher et fonctionner parfaitement sur les deux dernières versions majeures de Chrome, Firefox, Safari, et Edge, sur desktop et mobile.
4.  **Accessibilité :** Le site suivra les bonnes pratiques du WCAG 2.1 niveau AA pour garantir une expérience inclusive.
5.  **SEO Technique :** Le site sera développé avec des balises sémantiques (H1, H2, etc.), des métadonnées gérables via le CMS, un sitemap.xml auto-généré et des URL propres.

---
### 6. Contraintes Techniques et Opérationnelles

1.  **Stack Technique Imposée :**
    *   **Frontend :** Next.js (React)
    *   **CMS (Back-office) :** Sanity.io
    *   **Hébergement :** Vercel
2.  **Contenu (Responsabilités) :**
    *   **Client :** Le client est responsable de la fourniture de l'intégralité des contenus avant le début de la phase de développement : textes validés (copywriting) et ressources visuelles professionnelles (photos/vidéos issues du shooting).
    *   **Prestataire :** Le prestataire est responsable de l'intégration de ces contenus dans le site et le CMS.
3.  **Budget et Délais :**
    *   Le projet doit être réalisé dans le respect du budget défini dans le devis DEV-2025-11-001.
    *   Le délai de livraison cible est de 2 semaines après la réception de l'acompte ET de l'ensemble des contenus.

---
### 7. Périmètre Explicitement Exclu

Les fonctionnalités suivantes ne font pas partie de ce projet (MVP) et pourront être envisagées dans une phase ultérieure :

*   Système de réservation en ligne avec paiement et synchronisation de calendrier en temps réel.
*   Fonctionnalités e-commerce (vente de produits).
*   Espace client personnel.
*   Fonctionnalités de blog ou de magazine.
*   Développement de site multilingue.

---
### 8. Livrables et Jalonnement du Projet

| Phase | Description | Livrables Clés |
| :--- | :--- | :--- |
| **1. Cadrage** | Validation des spécifications et de la stratégie. | **Cahier des Charges Fonctionnel (ce document)** |
| **2. Design** | Conception de l'expérience visuelle. | Wireframes UX, Maquettes UI, Design System |
| **3. Développement** | Construction technique du site et du back-office. | Site fonctionnel sur un environnement de pré-production |
| **4. Recette** | Tests et validation par le client. | Cahier de recette validé, corrections des retours |
| **5. Déploiement** | Mise en ligne du site. | Site accessible à l'URL finale, formation du client au CMS |

---
### 9. Validation

Ce document a été lu et approuvé par les parties prenantes. Il fait office de contrat de référence pour la suite du projet. Toute demande de modification substantielle devra faire l'objet d'un avenant.

**Pour Kalia Beauty Studio**
Nom : Amina KALIA
Date : 29-11-2025
Signature :

**Pour le Prestataire**
Nom : Junior DJILAN
Date : 29-11-2025
Signature :