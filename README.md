# Benevolat

Ce project a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3 et le serveur Node.js version 20.12.2

## Description

C’est un projet ouvert pour la gestion de n'importe quel bénévolat (Loisirs, vente, arrangement, ect…). Les différents utilisateurs seront la possibilité aux clients de commander leur produit souhaité, les distributeurs de produits qui peuvent être des bénévoles ou pas, des gestionnaires de produits et le directeur qui guide les autres.  
 

## Démarrer le projet
1. Connexion avec la bd MYSQL(Xampp, workbench, ect...)  réussi (les requêtes de création et d'insértion sont dans
   ./BenevoleProjectPlan\Sqls\test)
   Mon projet utilise le package mysql pour la table Customer et le package squelize pour la table product. J'utilise le port 3307.
   Configuration de la connexion avec mysql dans le fichier index.ts et pour squelize dans product.model.ts
    
3. Commandes : 
    - Dans le backend Node.js :
       npm start
    - Dans le front end Angular :
       ng serve

## Notes
    Vous pouvez ouvrir le backend et le frontend séparément pour plus de visibility. 
