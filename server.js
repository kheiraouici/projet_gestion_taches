const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MySQL
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "taskmanager"
});

// Récupérer toutes les tâches
app.get("/tasks", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Ajouter une tâche
app.post("/tasks", async (req, res) => {
  const { title, description, category = null, user_id = 1 } = req.body;
  try {
    const [result] = await pool.execute(
      "INSERT INTO tasks (title, description, category, user_id) VALUES (?,?,?,?)",
      [title, description, category, user_id]
    );
    res.json({ id: result.insertId, title, description, status: "a_faire", category, user_id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
  try {
    await pool.execute("DELETE FROM tasks WHERE id=?", [req.params.id]);
    res.json({ message: "Tâche supprimée" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Lancer serveur
app.listen(5000, () => console.log("Serveur prêt sur http://localhost:5000"));
