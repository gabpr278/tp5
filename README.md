# Ma Todo App - TP5

Ce projet est une application de liste de tâches (To-Do List) structurée avec une architecture client-serveur.

## 🚀 Fonctionnalités
- **Afficher** la liste des tâches enregistrées.
- **Ajouter** de nouvelles tâches.
- **Compléter** : Marquer une tâche comme terminée ou à faire.
- **Supprimer** les tâches dont vous n'avez plus besoin.

## 🛠️ Stack Technique
### Backend (Node.js & Express)
- **API RESTful** : Gestion des requêtes `GET`, `POST`, `PUT` et `DELETE` sur la route `/todos`.
- **Persistance** : Sauvegarde des données dans un fichier statique `data.json` grâce au module `fs`.
- **CORS** : Configuration pour autoriser les communications entre le client et le serveur.

### Frontend (HTML, CSS, Vanilla JS)
- **Interface** : Structure en HTML et stylisation CSS pour une expérience utilisateur claire.
- **Logique Asynchrone** : Utilisation de `fetch` pour interroger l'API locale (sur le port 3000) et mettre à jour le DOM dynamiquement.

## ⚙️ Comment lancer le projet ?
1. **Démarrer le serveur** : Dans le dossier `backend`, exécutez `node app.js` (ou `nodemon app.js`). Le serveur écoutera sur `http://localhost:3000`.
2. **Ouvrir l'application** : Ouvrez simplement le fichier `frontend/index.html` dans un navigateur web.
