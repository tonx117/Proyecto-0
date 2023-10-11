// Imports
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();
require("ejs");

const app = express();
const port = process.env.PORT;

const { sequelize } = require("./db.js");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

require("ejs");

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// Views Routes
app.use("/", require("./routes/usuario.routes"));

app.use("/", require("./routes/index.routes"));
// Api Routes
app.use("/api", require("./api/routes/usuario.routes"));


app.use((_req, res, _next) => {
  res.status(404).send("Error 404");
});

// Starting the server
app.listen(process.env.PORT, () => console.log("Server on port: " + port));
