const usuarioctrl = require("../controllers/usuario.controllers");

const router = require("express").Router();

router.get("/", usuarioctrl.indexView);

router.get("/usuario/create", usuarioctrl.createView);

router.get("/usuario/:id/edit", usuarioctrl.editView);

module.exports = router;
