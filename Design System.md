---
tags:
  - design
  - system
  - kalia
---
---
### INFOS DE BASE

**Version :** 1.0  
**Date :** 27 Novembre 2025  
**Auteur :** [Votre Nom/Agence], Architecte Projet  
**Statut :** Approuvé

---
### 1. Philosophie et Principes Directeurs

Ce Design System traduit l'identité de Kalia Beauty Studio – **premium, minimaliste et féminin** – en un langage visuel et interactif cohérent. Il repose sur trois principes :

1.  **Clarté :** Chaque élément est conçu pour être lisible et compréhensible, sans ambiguïté. L'interface doit être intuitive.
2.  **Élégance :** L'esthétique est épurée, avec un accent sur la typographie, les espaces blancs et les détails subtils.
3.  **Cohérence :** Un composant doit avoir la même apparence et le même comportement partout sur le site. Cette prévisibilité renforce la confiance de l'utilisateur.

---
### 2. Fondations

#### 2.1. Palette de Couleurs (Color Palette)

La palette est intentionnellement restreinte pour renforcer l'identité premium.

| Nom (Token) | HEX | Aperçu | Rôle |
| :--- | :--- | :--- | :--- |
| `primary` | `#c49378` | 🎨 | Couleur d'accent principale (boutons, liens, icônes). |
| `primary-dark` | `#a8765d` | 🎨 | Pour le survol (hover) des éléments `primary`. |
| `primary-light` | `#e6d2c6` | 🎨 | Pour les fonds de section très subtils ou les bordures légères. |
| `text-heading` | `#111111` | 🎨 | Titres principaux. |
| `text-body` | `#444444` | 🎨 | Texte courant, pour une lecture confortable. |
| `text-muted` | `#757575` | 🎨 | Texte secondaire, légendes, placeholders. |
| `background-white` | `#ffffff` | 🎨 | Fond principal du site. |
| `background-offwhite`| `#f9f9f9` | 🎨 | Fond alternatif pour créer un contraste de section. |
| `border-default` | `#e0e0e0` | 🎨 | Bordures de cartes, séparateurs, champs de formulaire. |
| `semantic-success` | `#2e7d32` | 🎨 | Messages de validation, icônes de succès. |
| `semantic-error` | `#c62828` | 🎨 | Messages d'erreur de formulaire, alertes. |

#### 2.2. Typographie (Typography)

*   **Police des Titres (Headings) :** `Playfair Display`
*   **Police du Corps de Texte (Body) :** `Inter`

| Style | Taille (Mobile / Desktop) | `font-weight` | `line-height` | Cas d'usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | `2.44rem` / `3.05rem` | `600` (SemiBold) | 1.2 | Titre principal unique de la page d'accueil. |
| **H2** | `1.95rem` / `2.44rem` | `600` (SemiBold) | 1.2 | Titres de sections principaux. |
| **H3** | `1.56rem` / `1.95rem` | `600` (SemiBold) | 1.3 | Titres de cartes, sous-titres de section. |
| **H4** | `1.25rem` / `1.56rem` | `600` (SemiBold) | 1.4 | Titres de composants plus petits. |
| **Corps (Body)** | `1rem` / `1rem` | `400` (Regular) | 1.6 | Paragraphes, descriptions. |
| **Large** | `1.125rem` / `1.125rem` | `400` (Regular) | 1.6 | Texte d'introduction, citations. |
| **Small** | `0.875rem` / `0.875rem` | `400` (Regular) | 1.5 | Légendes, méta-informations. |

#### 2.3. Espacements et Grille (Spacing & Grid)

Le système est basé sur une **grille de 8 points**. Tous les espacements sont des multiples de 8px.

*   **Échelle (Tokens) :** `xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 32px`, `xxl: 64px`.
*   **Grille de Layout :** Grille à **12 colonnes** avec une gouttière de `24px` sur desktop.

#### 2.4. Ombres et Élévation (Shadows)

Les ombres sont subtiles pour créer une impression de profondeur sans distraire.

*   **`shadow-sm` :** `0 2px 4px rgba(0,0,0,0.05)` (utilisé pour les boutons au survol).
*   **`shadow-md` :** `0 5px 15px rgba(0,0,0,0.08)` (utilisé pour les cartes).
*   **`shadow-lg` :** `0 10px 25px rgba(0,0,0,0.1)` (utilisé pour les modales ou les éléments surélevés).

#### 2.5. Rayons de Bordure (Border Radius)

*   **`rounded-sm` :** `4px` (pour les tags, inputs).
*   **`rounded-md` :** `8px` (pour les cartes, images).
*   **`rounded-full` :** `9999px` (pour les avatars, boutons "pilule").

#### 2.6. Iconographie (Iconography)

*   **Librairie :** Lucide Icons (https://lucide.dev/).
*   **Style :** Linéaire, trait de `1.5px`.
*   **Taille Standard :** `24px`.

---
### 3. Composants (Components)

#### 3.1. Boutons (Buttons)

| Type | Style | État `hover` | Rôle |
| :--- | :--- | :--- | :--- |
| **Primaire** | Fond `primary`, texte `background-white`. | Fond `primary-dark`, `shadow-sm`. | L'appel à l'action principal (Réserver, Envoyer). |
| **Secondaire**| Bordure `primary`, texte `primary`. | Fond `primary-light`, texte `primary-dark`. | Action secondaire (Voir le détail, Filtrer). |
| **Texte** | Texte `primary`, pas de fond/bordure. | Texte `primary-dark`, souligné. | Action tertiaire discrète (Retour, Lire plus). |

*   Tous les boutons auront un `padding` de `12px 24px` et utiliseront le style de texte `Small` en `font-weight: 500`.

#### 3.2. Champs de Formulaire (Form Inputs)

*   **Style :** Fond `background-offwhite`, bordure `border-default`, `rounded-sm`.
*   **État `:focus` :** La bordure passe à la couleur `primary`, le fond devient `background-white`.
*   **État `error` :** La bordure passe à la couleur `semantic-error`. Un message d'erreur s'affiche en dessous avec la couleur `semantic-error`.

#### 3.3. Cartes (Cards)

*   **Style :** Fond `background-white`, bordure `border-default`, `rounded-md`.
*   **État `hover` :** Applique `shadow-md`, la bordure peut passer à `primary-light`.
*   **Usage :** Utilisé pour présenter les services, les témoignages, et les membres de l'équipe.

---
### 4. Application

Ce Design System sera implémenté en utilisant le framework **Tailwind CSS**. Les tokens (couleurs, espacements, etc.) seront configurés dans le fichier `tailwind.config.js` pour garantir une correspondance parfaite entre le design (Figma) et le code.