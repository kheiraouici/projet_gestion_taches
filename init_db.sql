-- Script de création de la base de données taskmanager

CREATE DATABASE IF NOT EXISTS taskmanager;
USE taskmanager;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('a_faire','fait') DEFAULT 'a_faire',
  category VARCHAR(100),
  user_id INT NOT NULL,
  CONSTRAINT fk_tasks_users FOREIGN KEY (user_id) REFERENCES users(id)
);
