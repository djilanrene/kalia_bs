---
tags:
  - plan
  - mise-en-production
  - kalia
---
---
### INFOS DE BASE

**Version :** 1.0  
**Date Planifiée de MEP :** [JJ/MM/AAAA]  
**Fenêtre d'Intervention :** [Heure de début] - [Heure de fin] (typiquement une période de faible trafic)  
**Auteur :** [Votre Nom/Agence], Architecte & Chef de Projet  
**Statut :** Prêt pour exécution

---
### 1. Introduction et Objectifs

Ce document détaille la séquence d'opérations à effectuer pour le déploiement officiel du site web de Kalia Beauty Studio. Il sert de checklist à l'équipe technique pour garantir une mise en production (MEP) contrôlée, sécurisée et réussie.

Les objectifs sont :
*   **Zéro Downtime :** Assurer que le site est accessible en permanence pendant la transition.
*   **Intégrité des Données :** S'assurer que le contenu final est correctement déployé.
*   **Performance Optimale :** Valider que le site en production atteint les objectifs de performance.
*   **Traçabilité :** Garder une trace de chaque action effectuée.

---
### 2. Prérequis (À valider 48h AVANT la MEP)

| ID | Prérequis | Responsable | Statut (OK/KO) |
| :--- | :--- | :--- | :--- |
| **P-01**| Validation Finale ("Bon pour MEP") | Client | |
| **P-02**| Contenu Final Intégré et Validé | Client | |
| **P-03**| Nom de Domaine Acheté | Client / Agence | |
| **P-04**| Accès au Registrar du Nom de Domaine| Client / Agence | |
| **P-05**| Variables d'Environnement Production Prêtes| Développeur | |

---
### 3. Checklist de Mise en Production

*Cette checklist doit être suivie dans l'ordre par l'équipe technique le jour de la MEP.*

#### Phase 1 : Préparation Finale (T-1 Heure)

| ID | Action | Responsable | Statut (Fait) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MEP-01**| Communication de début d'intervention | Chef de Projet | | Le client est informé que la MEP commence. |
| **MEP-02**| Gel du Code (Code Freeze) | Développeur | | Plus aucune modification de code n'est acceptée sur la branche `main`.|
| **MEP-03**| Merge final `develop` -> `main` | Développeur | | La dernière version validée est fusionnée sur la branche de production.|
| **MEP-04**| Ultime Build sur la Branche `main` | Développeur | | Vérifier que le build Vercel sur la branche `main` se termine avec succès. |

#### Phase 2 : Déploiement Technique (Heure H)

| ID | Action | Responsable | Statut (Fait) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MEP-05**| Ajout du Nom de Domaine sur Vercel | Développeur | | Ajouter `kaliabeautystudio.com` et `www.kaliabeautystudio.com` au projet Vercel.|
| **MEP-06**| Configuration des DNS | Développeur | | Mettre à jour les enregistrements DNS chez le registrar pour pointer vers Vercel. |
| **MEP-07**| Propagation DNS | (Automatique) | | Attendre que la propagation DNS se termine (peut prendre de quelques minutes à quelques heures). |
| **MEP-08**| Validation du Certificat SSL | Vercel (Auto) | | Vérifier que Vercel a bien généré le certificat SSL et que le site est accessible en HTTPS. |
| **MEP-09**| Vérification de l'Accès au Site | Développeur | | Accéder à `https://www.kaliabeautystudio.com` et vérifier que le site s'affiche. |
| **MEP-10**| Forcer la Redirection | Développeur | | S'assurer que `http://` redirige vers `https://` et que le domaine nu redirige vers `www`. |

#### Phase 3 : Tests Post-Déploiement (Heure H+1)

| ID | Action | Responsable | Statut (Fait) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MEP-11**| Test de Navigation (Smoke Test) | Chef de Projet | | Naviguer sur 5-6 pages clés pour s'assurer qu'elles fonctionnent en production. |
| **MEP-12**| Test du Formulaire de Contact | Chef de Projet | | Soumettre un formulaire depuis le site en production et vérifier la réception de l'email. |
| **MEP-13**| Analyse de Performance Initiale | Développeur | | Lancer un test Google PageSpeed Insights sur l'URL de production. Score doit être > 90. |
| **MEP-14**| Vérification SEO Basique | Chef de Projet | | Vérifier que le `robots.txt` est correct et que les balises `title` et `description` sont présentes. |
| **MEP-15**| Configuration Google Search Console | Chef de Projet | | Soumettre le sitemap.xml à Google Search Console pour indexation. |
| **MEP-16**| Configuration Google Analytics | Chef de Projet | | Vérifier que le tracking des visites fonctionne en temps réel. |

#### Phase 4 : Clôture (Heure H+2)

| ID | Action | Responsable | Statut (Fait) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MEP-17**| Communication de fin d'intervention | Chef de Projet | | Le client est informé que le site est officiellement en ligne. |
| **MEP-18**| Sauvegarde Initiale | Développeur | | Faire un tag Git de la version de production (ex: `v1.0.0`). |

---
### 4. Plan de Retour Arrière (Rollback Plan)

*En cas de problème majeur découvert pendant la Phase 2 ou 3 (ex: site inaccessible, fonctionnalité critique cassée), le plan suivant sera activé.*

1.  **Décision :** Le Chef de Projet et le Développeur principal décident d'activer le rollback.
2.  **Action :** Revenir à la configuration DNS précédente chez le registrar du nom de domaine.
3.  **Communication :** Le client est informé du problème et du report de la MEP.
4.  **Analyse :** L'équipe technique analyse la cause racine de l'échec en se basant sur les logs de Vercel et les tests.
5.  **Correction :** Le problème est corrigé sur une nouvelle branche et testé rigoureusement en pré-production.
6.  **Re-planification :** Une nouvelle date de MEP est planifiée.