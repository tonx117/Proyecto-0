import { Router } from "express";
import usuarioController from "../controllers/usuario.controllers.js";

const router = Router();

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.store);
router.get("/usuario/:id", usuarioController.show);
router.put("/usuario/:id", usuarioController.update);
router.delete("/usuario/:id", usuarioController.destroy);
router.post("/usuario/login", usuarioController.login);

export default router;
