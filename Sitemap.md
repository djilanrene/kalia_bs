---
tags:
  - sitemap
  - arborescence
  - site
  - web
  - kalia
---
---
### INFOS DE BASE
**Version :** 1.0  
**Date :** 27 Novembre 2025  
**Auteur :** [Votre Nom/Agence], Architecte Projet  
**Statut :** Approuvé

---
### 1. Introduction et Objectifs

Ce document définit l'architecture de l'information, la hiérarchie des pages et la structure de navigation du site web de Kalia Beauty Studio. Il sert de plan directeur pour garantir une expérience utilisateur (UX) intuitive, cohérente et efficace.

Les objectifs de cette arborescence sont de :
*   **Assurer une navigation simple et prévisible** pour l'utilisateur final.
*   **Optimiser les parcours de conversion**, de la découverte à la prise de contact.
*   **Fournir une structure claire** pour le développement technique et la gestion de contenu.

---
### 2. Principes de Conception de la Navigation

L'arborescence a été conçue en respectant les principes fondamentaux suivants :

1.  **Hiérarchie Plate :** La structure ne dépasse pas **deux niveaux de profondeur**. L'utilisateur n'est jamais à plus de deux clics de l'information la plus détaillée, ce qui réduit la charge cognitive et prévient le sentiment d'être "perdu".
2.  **Clarté des Labels :** Les noms des pages sont explicites et universels ("Prestations", "Galerie", "Contact"). Nous évitons le jargon pour nous conformer aux conventions du web (Loi de Jakob), rendant le site immédiatement familier.
3.  **Focalisation sur la Conversion :** Un appel à l'action (CTA) principal, "Prendre Rendez-vous", est omniprésent et guide l'utilisateur vers l'objectif final du site de manière douce mais constante.

---
### 3. Arborescence Visuelle

La structure du site est la suivante :

```
  /  
└── Niveau 1 : Pages Principales  
├── /accueil  
│  
├── /prestations  
│ └── Niveau 2 : Pages de Détail  
│ └── /prestations/[slug-service] (Modèle de page dynamique)  
│  
├── /galerie  
│  
├── /le-salon  
│  
└── /contact
```

---

### 4. Description Détaillée des Pages

| Page | URL Slug | Objectif Principal (Job-to-be-done) | CTA Principal de la Page |
| :--- | :--- | :--- | :--- |
| **Accueil** | `/` | **Inspirer & Orienter.** Convaincre le visiteur de la qualité premium du salon en 30 secondes et le diriger vers les sections clés. | `Prendre Rendez-vous` |
| **Prestations (Listing)** | `/prestations` | **Informer & Comparer.** Permettre à l'utilisateur de scanner l'ensemble de l'offre, de comprendre les catégories et de comparer les services. | `Voir le détail` |
| **Prestation (Détail)** | `/prestations/[slug]` | **Rassurer & Convaincre.** Fournir toutes les informations nécessaires (prix, durée, bénéfices) pour lever les doutes et déclencher la décision de réservation. | `Réserver ce soin` |
| **Galerie** | `/galerie` | **Prouver.** Fournir la preuve visuelle irréfutable de la qualité du travail et inspirer le visiteur. | `Découvrir nos prestations` |
| **Le Salon** | `/le-salon` | **Humaniser & Bâtir la Confiance.** Raconter l'histoire, présenter l'équipe et montrer le lieu pour créer un lien émotionnel avec la marque. | `Prendre Rendez-vous` |
| **Contact & RDV** | `/contact` | **Convertir.** Rendre la prise de contact et la demande de réservation aussi simple et rapide que possible. | `Envoyer la demande` |

---
### 5. Structure de la Navigation Principale

Les éléments suivants seront présents de manière persistante sur l'ensemble du site pour garantir une navigation cohérente.

#### 5.1. Navigation Principale (Header)

La barre de navigation en haut de page contiendra au maximum 5 liens pour une clarté optimale :
1.  **Accueil** (Lien vers `/`)
2.  **Prestations** (Lien vers `/prestations`)
3.  **Galerie** (Lien vers `/galerie`)
4.  **Le Salon** (Lien vers `/le-salon`)
5.  **Contact** (Lien vers `/contact`)

#### 5.2. Appel à l'Action Principal (CTA)

Un bouton visuellement distinct sera présent en permanence dans le header :
*   **Texte :** `Prendre Rendez-vous`
*   **Destination :** Lien vers la page `/contact`

#### 5.3. Pied de Page (Footer)

Le footer, présent sur toutes les pages, contiendra :
*   Un rappel des liens de navigation principaux.
*   Les coordonnées complètes : Adresse, Téléphone (cliquable), Email.
*   Les horaires d'ouverture.
*   Les liens vers les réseaux sociaux (Instagram, Facebook).
*   Un lien vers la page "Mentions Légales / Politique de Confidentialité".

---
### 6. Validation

Cette arborescence a été conçue pour fournir une fondation solide et centrée sur l'utilisateur pour le site Kalia Beauty Studio. Elle est approuvée et servira de référence pour les phases de design UX/UI et de développement.