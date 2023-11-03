import Usuario from "../api/models/usuario.model.js";

export async function authenticate(req, res, next) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            message: 'Acceso no autorizado'
        })
    }

    try {
        const user = await Usuario.findByPk(token);
        if (!user) {
            return res.status(404).json({
                message: 'Acceso no autorizado'
            })
        }
        req.user = user;
        next();
    } catch(err) {

    }
}