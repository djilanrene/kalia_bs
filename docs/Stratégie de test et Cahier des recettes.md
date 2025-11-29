---
tags:
  - strategie
  - test
  - cahier
  - recettes
  - kalia
---
---
### INFOS DE BASE

**Version :** 1.0  
**Date :** 27 Novembre 2025  
**Auteur :** [Votre Nom/Agence], Architecte & Chef de Projet  
**Statut :** Prêt pour la phase de recette

---
### 1. Introduction et Objectifs

Ce document définit la stratégie, les processus et les critères de validation pour la phase de test (recette) du site web Kalia Beauty Studio.

Les objectifs de cette stratégie sont de :
*   **Assurer la conformité** du site livré par rapport au Cahier des Charges Fonctionnel et aux maquettes validées.
*   **Identifier et corriger** un maximum d'anomalies (bugs) avant la mise en production.
*   **Fournir un cadre objectif** pour la validation finale du projet par le client.
*   **Garantir un haut niveau de qualité**, de performance et de fiabilité du produit final.

---
### 2. Stratégie de Test

La validation du projet se déroulera en deux phases distinctes :

**A. Phase 1 : Recette Interne (QA - Quality Assurance)**
*   **Quand :** Avant la livraison du site au client pour la recette.
*   **Qui :** L'équipe projet (Chef de Projet, un autre développeur).
*   **Objectif :** Effectuer une passe de tests complète pour "débroussailler" le terrain et corriger les bugs les plus évidents. Le but est de présenter au client une version la plus stable et conforme possible.
*   **Outils :** Le "Cahier de Recette" ci-dessous, outils de développement des navigateurs.

**B. Phase 2 : Recette Client (UAT - User Acceptance Testing)**
*   **Quand :** Pendant la "Phase 3 : Contenu & Recette" du plan de projet.
*   **Qui :** Le client (Direction de Kalia Beauty Studio) et les utilisateurs finaux désignés.
*   **Objectif :** Permettre au client de valider que le site répond bien à ses attentes et aux besoins de ses utilisateurs. Le client suit le Cahier de Recette et signale les anomalies.
*   **Outils :** Le "Cahier de Recette" ci-dessous, un outil de suivi des anomalies (ex: Trello, Google Sheet partagé, ou simple document Word).

---
### 3. Environnement de Test

Tous les tests seront effectués sur l'**environnement de pré-production**, accessible via une URL privée (ex: `kalia-dev.vercel.app`). Cet environnement est une réplique exacte de l'environnement de production final.

**Navigateurs et Appareils Cibles pour les Tests :**
*   **Desktop :**
    *   Google Chrome (dernière version)
    *   Mozilla Firefox (dernière version)
    *   Apple Safari (dernière version)
*   **Mobile :**
    *   Safari sur iOS (dernier iPhone simulé)
    *   Chrome sur Android (appareil populaire simulé, ex: Samsung Galaxy)

---
### 4. Gestion des Anomalies

Toute non-conformité par rapport au comportement attendu est une "anomalie".

*   **Signalement :** Chaque anomalie doit être décrite de manière précise :
    1.  **Titre :** Résumé du problème.
    2.  **Page :** URL où le bug a été trouvé.
    3.  **Étapes pour reproduire :** Description claire de la séquence d'actions qui mène au bug.
    4.  **Comportement observé :** "Ce qui se passe."
    5.  **Comportement attendu :** "Ce qui aurait dû se passer."
    6.  **Capture d'écran :** Très fortement recommandée.
*   **Priorisation :** Les anomalies seront classées par priorité :
    *   **Bloquant :** Empêche l'utilisation d'une fonctionnalité majeure. Doit être corrigé avant la mise en production.
    *   **Majeur :** Altère fortement une fonctionnalité sans la bloquer. Fortement recommandé de corriger.
    *   **Mineur :** Problème cosmétique ou de confort qui n'empêche pas l'utilisation. Peut être corrigé après la mise en production si nécessaire.

---
### 5. Cahier de Recette

*Instructions : Pour chaque cas de test, effectuer les actions décrites et cocher le statut correspondant (OK / KO). Si KO, créer une fiche d'anomalie détaillée.*

#### Partie 1 : Tests Généraux et Visuels

| ID | Cas de Test | Actions à Effectuer | Comportement Attendu | Statut (OK/KO) |
| :--- | :--- | :--- | :--- | :--- |
| **G-01**| Conformité Visuelle (Header/Footer)| Naviguer sur toutes les pages. | Le header et le footer sont identiques partout et conformes à la maquette. | |
| **G-02**| Favicon et Titre de Page | Ouvrir plusieurs pages dans des onglets. | Le favicon du site s'affiche. Le titre dans l'onglet est pertinent pour la page en cours. | |
| **G-03**| Liens Internes | Cliquer sur tous les liens de la navigation, du footer et dans les contenus. | Tous les liens mènent à la bonne page sans erreur 404. | |
| **G-04**| Responsive Design - Tablette | Redimensionner la fenêtre du navigateur en mode tablette. | Le site s'adapte correctement, le menu "burger" apparaît. Pas de scroll horizontal. | |
| **G-05**| Responsive Design - Mobile | Redimensionner la fenêtre du navigateur en mode mobile. | Le site s'affiche de manière lisible et utilisable. Les textes et boutons sont de taille correcte. | |

#### Partie 2 : Tests Fonctionnels par Page

| ID | Cas de Test | Actions à Effectuer | Comportement Attendu | Statut (OK/KO) |
| :--- | :--- | :--- | :--- | :--- |
| **HOME-01**| Page d'Accueil | Vérifier tous les contenus (textes, images). | Les contenus sont conformes aux textes fournis. Les images s'affichent correctement. | |
| **HOME-02**| Liens CTA | Cliquer sur les différents boutons ("Découvrir nos prestations", "Prendre RDV"). | Les boutons redirigent vers les bonnes pages. | |
| **SERV-01**| Listing des Prestations | Accéder à la page `/prestations`. | Toutes les prestations créées dans le CMS s'affichent correctement. | |
| **SERV-02**| Détail d'une Prestation | Cliquer sur "Voir le détail" d'une prestation. | La page détail s'affiche avec toutes les informations (prix, durée, description, galerie). | |
| **GAL-01**| Affichage de la Galerie | Accéder à la page `/galerie`. | Toutes les images de la galerie s'affichent. | |
| **GAL-02**| Filtres de la Galerie | Cliquer sur les différents boutons de filtre (ex: "Coiffure"). | Seules les images de la catégorie sélectionnée s'affichent, sans recharger la page. | |
| **GAL-03**| Lightbox | Cliquer sur une miniature. | L'image s'ouvre en grand dans une lightbox. On peut naviguer entre les images et la fermer. | |
| **ABOUT-01**| Contenu Page "Le Salon" | Accéder à la page `/le-salon`. | Tous les contenus (histoire, équipe) sont corrects et conformes. | |
| **CONTACT-01**| Formulaire - Envoi Valide | Remplir le formulaire de contact avec des informations valides et l'envoyer. | Un message de succès s'affiche. L'email de notification est bien reçu. | |
| **CONTACT-02**| Formulaire - Champs Vides | Essayer d'envoyer le formulaire avec un champ obligatoire vide. | Un message d'erreur clair apparaît sous le champ concerné. Le formulaire n'est pas envoyé. | |
| **CONTACT-03**| Formulaire - Email Invalide | Entrer une adresse email mal formatée. | Un message d'erreur de format s'affiche. Le formulaire n'est pas envoyé. | |

---
### 6. Critères d'Acceptation pour la Mise en Production

La mise en production sera validée lorsque les conditions suivantes sont réunies :
1.  **100% des cas de test** du présent cahier de recette ont le statut **"OK"**.
2.  **Aucune anomalie de priorité "Bloquant"** n'est ouverte.
3.  Un accord mutuel est trouvé sur le traitement des anomalies "Majeures" et "Mineures" restantes (correction avant MEP ou planification pour une phase de maintenance ultérieure).
4.  Le client a fourni une validation écrite formelle ("Bon pour mise en production").