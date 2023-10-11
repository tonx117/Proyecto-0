// Import modules
import cors from "cors";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { config as dotenvConfig } from "dotenv";
import ejs from "ejs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

import { sequelize } from "./db.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

dotenvConfig();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// Views Routes
import userRoutes from "./routes/user.routes.js";
app.use("/", userRoutes);

import indexRoutes from "./routes/index.routes.js";
app.use("/", indexRoutes);

// API Routes
import apiUserRoutes from "./api/routes/user.routes.js";
app.use("/api", apiUserRoutes);

app.use((_req, res, _next) => {
  res.status(404).send("Error 404");
});

// Ruta para procesar el formulario y enviar el correo electrónico
app.post("/enviar-correo", (req, res) => {
  const { nombre, email, telefono, website, asunto, mensaje } = req.body;

  const mailOptions = {
    from: email,
    to: "diegojara88574@gmail.com",
    subject: asunto,
    text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nSitio web: ${website}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Error al enviar el correo");
    } else {
      console.log("Correo electrónico enviado:", info.response);
      res.send("Correo enviado correctamente");
    }
  });
});

// Starting the server
app.listen(process.env.PORT, () => console.log("Server on port: " + port));
