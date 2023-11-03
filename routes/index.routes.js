import express from "express";
import * as indexController from "../controllers/index.controllers.js";
import { checkUserRole } from '../middlewares/roles_validacion.js';
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/acercade", indexController.acercadeview);
router.get("/servicios", indexController.serviciosview);
router.get("/cuenta", indexController.cuentaview);
router.get("/herramientas", indexController.herramientasview);
router.get("/checklist", authenticate, checkUserRole("profesional"), indexController.checklistview);
router.get("/contacto", indexController.contactoview);
router.get("/login", indexController.loginview);
router.get("/register", indexController.registerview);
router.get("/wiki", indexController.wikiview);
router.get("/generales", indexController.generalesview);
router.get("/electricidad", indexController.electricidadview);
router.get("/carpinteria", indexController.carpinteriaview);
router.get("/metalurgia", indexController.metalurgiaview);

export default router;
