const index = require("../controllers/index.controllers");

const router = require("express").Router();

router.get("/acercade", index.acercadeview);

router.get("/servicios", index.serviciosview);

router.get("/cuenta", index.cuentaview);

router.get("/herramientas", index.herramientasview);

router.get("/checklist", index.checklistview);

router.get("/contacto", index.contactoview);

router.get("/login", index.loginview);

router.get("/register", index.registerview);

router.get("/wiki", index.wikiview);

router.get("/generales", index.generalesview);

router.get("/electricidad", index.electricidadview);

router.get("/carpinteria", index.carpinteriaview);

router.get("/metalurgia", index.metalurgiaview);

module.exports = router;
