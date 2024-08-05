import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'

dotenv.config(); // Charger les variables d'environnement depuis le fichier .env

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Définir un port depuis les variables d'environnement ou utiliser 3000 par défaut
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoutes);
  