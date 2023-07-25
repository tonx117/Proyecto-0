const ctrlReservas = require("../controllers/reserva.controllers");

const router = require("express").Router();

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", ctrlReservas.indexView);
// Formulario para crear una reserva
router.get("/reservas/create", ctrlReservas.createView);

// Formulario para actualizar una reserva
router.get("/reservas/:id/edit", ctrlReservas.editView);

module.exports = router;
