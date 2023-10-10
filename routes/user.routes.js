import express from "express";
import * as usuarioController from "../controllers/usuario.controllers";

const router = express.Router();

router.get("/", usuarioController.indexView);
router.get("/usuario/create", usuarioController.createView);
router.get("/usuario/:id/edit", usuarioController.editView);

export default router;
