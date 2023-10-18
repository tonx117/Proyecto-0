import express from "express";
import { generalesview,
metalurgiaview,
electricidadview,
carpinteriaview,
acercadeview,
checklistview,
contactoview,
wikiview,
cuentaview,
herramientasview,
loginview,
registerview,
serviciosview } from "../controllers/index.controllers.js";

const router = express.Router();

router.get("/acercade", acercadeview);
router.get("/servicios", serviciosview);
router.get("/cuenta", cuentaview);
router.get("/herramientas", herramientasview);
router.get("/checklist", checklistview);
router.get("/contacto", contactoview);
router.get("/login", loginview);
router.get("/register", registerview);
router.get("/wiki", wikiview);
router.get("/generales", generalesview);
router.get("/electricidad", electricidadview);
router.get("/carpinteria", carpinteriaview);
router.get("/metalurgia", metalurgiaview);

export default router;
