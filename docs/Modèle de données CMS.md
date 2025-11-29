---
tags:
  - modele
  - donnees
  - cms
  - data
  - kalia
---
---
### INFOS DE BASE

**Version :** 1.0  
**Date :** 27 Novembre 2025  
**Auteur :** [Votre Nom/Agence], Architecte Projet  
**Statut :** Approuvé pour Implémentation

---
### 1. Introduction

Ce document spécifie la structure de tout le contenu éditable du site Kalia Beauty Studio. Il sert de blueprint pour la configuration des schémas dans le back-office **Sanity.io**.

L'objectif est de créer une interface d'administration (le "Studio") qui soit :
*   **Intuitive :** Facile à utiliser pour l'équipe de Kalia sans compétences techniques.
*   **Structurée :** Garantir que le contenu est entré de manière cohérente et complète.
*   **Flexible :** Permettre au site de grandir sans nécessiter de refonte de la structure de données.

Le modèle est organisé en deux types principaux de documents : les **Collections** (éléments multiples, ex: services) et les **Singletons** (pages uniques, ex: page d'accueil).

---
### 2. Schémas de Type "Collection"

#### 2.1. Prestation (`service`)
*   **Description :** Représente une prestation unique offerte par le salon. C'est le type de contenu le plus important.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `title` | `string` | **Obligatoire.** Titre principal de la prestation. |
    | `slug` | `slug` | **Obligatoire.** URL unique. Généré automatiquement à partir du `title`. |
    | `category` | `reference` | **Obligatoire.** Lien vers un document de type `serviceCategory` (ex: Coiffure, Soins Visage). |
    | `mainImage` | `image` | **Obligatoire.** Image principale (utilisée sur la carte et en haut de la page détail). Champ `alt` requis. |
    | `price` | `string` | **Obligatoire.** Texte libre pour gérer "Dès XX€" ou "Sur devis". Ex: "À partir de 65€". |
    | `duration` | `string` | **Obligatoire.** Durée de la prestation. Ex: "1h 15min". |
    | `shortDescription` | `text` | **Obligatoire.** Description courte (1-2 phrases) pour la carte de listing. Max 200 caractères. |
    | `fullDescription`| `blockContent`| **Obligatoire.** Description détaillée pour la page du service. Permet le formatage (gras, listes). |
    | `gallery` | `array` of `image`| **Optionnel.** Galerie d'images illustrant les résultats. Chaque image doit avoir un `alt`. |

#### 2.2. Catégorie de Prestation (`serviceCategory`)
*   **Description :** Permet de regrouper les prestations (ex: Coiffure, Maquillage) et de les filtrer.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `title` | `string` | **Obligatoire.** Ex: "Coiffure", "Soins Visage". |
    | `slug` | `slug` | **Obligatoire.** Généré automatiquement à partir du `title`. |

#### 2.3. Témoignage (`testimonial`)
*   **Description :** Représente un témoignage client.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `quote` | `text` | **Obligatoire.** La citation du client. |
    | `author` | `string` | **Obligatoire.** Nom du client. Ex: "Sarah M.". |

#### 2.4. Membre de l'équipe (`teamMember`)
*   **Description :** Représente un membre de l'équipe du salon.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `name` | `string` | **Obligatoire.** Nom complet du membre. |
    | `role` | `string` | **Obligatoire.** Spécialité. Ex: "Artiste Coiffeur", "Esthéticienne Experte". |
    | `photo` | `image` | **Obligatoire.** Portrait professionnel. Champ `alt` requis. |

#### 2.5. Image de la Galerie (`galleryImage`)
*   **Description :** Représente une image du portfolio.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `image` | `image` | **Obligatoire.** L'image elle-même. Champ `alt` obligatoire pour l'accessibilité. |
    | `category` | `reference` | **Obligatoire.** Lien vers une `serviceCategory` pour permettre le filtrage. |

---
### 3. Schémas de Type "Singleton" (Pages Uniques)

Ces documents sont configurés pour n'avoir qu'une seule instance dans le CMS.

#### 3.1. Page d'Accueil (`homePage`)
*   **Description :** Gère le contenu de la page d'accueil.
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `heroTitle` | `string` | **Obligatoire.** Le titre principal (H1) dans la bannière. |
    | `heroSubtitle` | `text` | **Optionnel.** Le paragraphe sous le titre principal. |
    | `valueProposition`| `array` of `object`| **Obligatoire.** Les 3 points forts (icône, titre, description). |
    | `featuredServices`| `array` of `reference`| **Optionnel.** Sélection de 3-4 prestations à mettre en avant. Lien vers des documents `service`. |
    | `featuredTestimonials`|`array` of `reference`| **Optionnel.** Sélection de 2-3 témoignages à afficher. Lien vers des documents `testimonial`. |

#### 3.2. Page "Le Salon" (`aboutPage`)
*   **Description :** Gère le contenu de la page "À Propos".
*   **Champs :**
    | Nom du Champ | Type de Champ | Règles de Validation & Notes |
    | :--- | :--- | :--- |
    | `title` | `string` | **Obligatoire.** Titre de la section (ex: "Notre Histoire"). |
    | `historySection`| `blockContent`| **Obligatoire.** Texte principal racontant l'histoire du salon. |
    | `founderImage`| `image` | **Obligatoire.** Photo de la fondatrice. Champ `alt` requis. |
    | `teamSection` | `array` of `reference`| **Optionnel.** Sélection des membres de l'équipe à afficher. Lien vers des documents `teamMember`. |

---
### 4. Structure de l'Interface du CMS (Sanity Studio)

L'interface d'administration sera organisée pour être intuitive :
*   Le menu principal listera clairement les types de contenu : `Prestations`, `Catégories`, `Témoignages`, `Galerie`, `Équipe`.
*   Les pages uniques (`Page d'Accueil`, `Page "Le Salon"`) seront regroupées dans une section "Gestion des Pages".
*   Des instructions et des textes d'aide (`helpText`) seront ajoutés à chaque champ complexe pour guider l'utilisateur.
*   L'ordre des champs dans l'interface suivra une logique de lecture naturelle.