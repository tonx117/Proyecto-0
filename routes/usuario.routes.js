// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const usuarioctrl = require("../controllers/usuario.controllers");

const router = require("express").Router();

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", usuarioctrl.indexView);
// Formulario para crear una reserva
router.get("/usuario/create", usuarioctrl.createView);

// Formulario para actualizar una reserva
router.get("/usuario/:id/edit", usuarioctrl.editView);

module.exports = router;
