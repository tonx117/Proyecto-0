// Obtener todas las reservas
const usuario = require("../models/usuario.model");
const usuarioctrl = {};

usuarioctrl.index = async (_req, res) => {
  try {
    const Usuario = await usuario.findAll();
    if (!Usuario || Usuario.length === 0) {
      throw {
        status: 404,
        message: "No estas registrado aún.",
      };
    }
    return res.json(Usuario);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};
// Obtener una reserva
usuarioctrl.show = async (req, res) => {
  const UsuarioId = req.params.id;

  try {
    const Usuario = await usuario.findByPk(UsuarioId);

    if (!Usuario) {
      throw {
        status: 404,
        message: "No existe la reserva con el id " + UsuarioId,
      };
    }

    return res.json(Usuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

// Crear una reserva
usuarioctrl.store = async (req, res) => {
  const { nombre, apellido, numerotelefono, correo, contraseña } = req.body; // Asegúrate de tener el campo "apellido" en la solicitud

  try {
    const Usuario = await usuario.create({
      nombre,
      apellido,
      numerotelefono,
      correo,
      contraseña,
    });

    if (!Usuario) {
      throw {
        status: 400,
        message: "No se pudo crear el usuario.",
      };
    }

    return res.json(Usuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};
// Actualizar una reserva
usuarioctrl.update = async (req, res) => {
  const UsuarioId = req.params.id;
  const { nombre, apellido, numerotelefono, correo, contraseña } = req.body;
  try {
    const Usuario = await usuario.findByPk(UsuarioId);
    await Usuario.update({
      nombre,
      apellido,
      numerotelefono,
      correo,
      contraseña,
    });
    return res.json(Usuario);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};
// Eliminar una reserva de forma lógica
usuarioctrl.destroy = async (req, res) => {
  const UsuarioId = req.params.id;

  try {
    const cuenta = await usuario.findByPk(UsuarioId);
    await usuario.destroy({
      where: {
        id: UsuarioId,
      },
    });

    return res.json({ cuenta, message: "Cuenta eliminada correctamente." });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

module.exports = usuarioctrl;
