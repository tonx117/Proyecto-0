import express from "express";
import usuarioController from "../controllers/usuario.controllers.js";

const router = express.Router();

router.get("/", usuarioController.indexView);
router.get("/usuario/create", usuarioController.createView);
router.get("/usuario/:id/edit", usuarioController.editView);

export default router;
