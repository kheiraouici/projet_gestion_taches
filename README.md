# Application de gestion de tâches – TP DWWM

## 📌 Contexte
Ce projet est un **gestionnaire de tâches** développé dans le cadre du **Titre Professionnel Développeur Web et Web Mobile (DWWM)**.

Il permet à un utilisateur de :
- Ajouter une tâche
- Lister ses tâches
- Supprimer une tâche
- Catégoriser les tâches
- Suivre l’état (à faire / fait)

---

## 🚀 Technologies utilisées
- **Front-end** : HTML, CSS, JavaScript (Fetch API)
- **Back-end** : Node.js, Express
- **Base de données** : MySQL
- **Outils** : Postman, GitHub

---

## ⚙️ Installation

### 1. Cloner le projet
```bash
git clone https://github.com/ton-compte/projet_gestion_taches.git
cd projet_gestion_taches
```

### 2. Installer les dépendances Node.js
```bash
npm init -y
npm install express mysql2 cors
```

### 3. Créer la base de données MySQL
Se connecter à MySQL puis exécuter :
```sql
CREATE DATABASE taskmanager;

USE taskmanager;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('a_faire','fait') DEFAULT 'a_faire',
  category VARCHAR(100),
  user_id INT NOT NULL,
  CONSTRAINT fk_tasks_users FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### 4. Lancer le serveur
```bash
node server.js
```

### 5. Tester l’application
Ouvrir `index.html` dans un navigateur.  
API disponible sur : [http://localhost:5000/tasks](http://localhost:5000/tasks)

---

## ✅ Fonctionnalités à venir
- Authentification (inscription / connexion)
- Partage de listes entre utilisateurs
- Filtrage, tri, recherche des tâches
- Interface responsive (mobile)

---

## 👤 Auteur
Projet réalisé par **Kheira Ouici** dans le cadre du **TP DWWM**.
