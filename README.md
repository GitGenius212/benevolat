# Benevolat

Ce project a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3 et le serveur Node.js version 20.12.2

# Application de bénévolat

## 📌 Contexte
Création d'une application complète qui aide à organiser le bénévolat (comme une équipe qui s'entraide pour une bonne cause). C'est un projet ouvert, adaptable à n'importe quel type de bénévolat (loisirs, vente, arrangement, etc.).

## 👥 Types d'utilisateurs
- **Client** : commande le produit souhaité.
- **Distributeur de produits** : bénévole ou non.
- **Gestionnaire de produits** : s'occupe des produits.
- **Directeur** : guide les autres.

## ⚙️ Fonctionnalités
- **Gestion des utilisateurs** : ajouter, consulter et modifier les personnes inscrites.
- **Gestion des produits** : enregistrer et suivre les produits liés au bénévolat.

## 🛠️ Technologies
- **Angular** : pour ce que l'utilisateur voit à l'écran.
- **Node.js avec Express** : pour la logique cachée derrière le site.
- **MySQL avec Sequelize** : pour sauvegarder les informations.

`Angular` · `Node.js` · `Express` · `MySQL` · `Sequelize`

## 🚀 Démarrer le projet

### 1. Connexion à la base de données MySQL
Connexion réussie avec MySQL (XAMPP, Workbench, etc.).
- Les requêtes de création et d'insertion se trouvent dans `./BenevoleProjectPlan/Sqls/test`.
- Le package `mysql` est utilisé pour la table **Customer**, et le package `sequelize` pour la table **Product**.
- Le projet utilise le port **3307**.
- La connexion avec MySQL est configurée dans le fichier `index.ts`, et celle de Sequelize dans `product.model.ts`.

### 2. Commandes
- Backend Node.js (`benevolat_server`) :
  ```bash
  npm start
  ```
- Frontend Angular (`benevolat_ang`) :
  ```bash
  ng serve
  ```

> **Notes :** vous pouvez ouvrir le backend et le frontend séparément pour plus de visibilité.

## ✅ Résultat
Une application complète et fonctionnelle, de l'écran jusqu'à la base de données.
