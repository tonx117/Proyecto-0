// Obtener todas las reservas
const usuarioctrl = require("../controllers/usuario.controllers");

const router = require("express").Router();

router.get("/usuario", usuarioctrl.index);

// Crear una reserva
router.post("/usuario", usuarioctrl.store);

// obtener una reserva
router.get("/usuario/:id", usuarioctrl.show);

// Actualizar una reserva
router.put("/usuario/:id", usuarioctrl.update);

// Eliminar una reserva de forma lógica
router.delete("/usuario/:id", usuarioctrl.destroy);

router.post("/usuario/login", usuarioctrl.login);

module.exports = router;
