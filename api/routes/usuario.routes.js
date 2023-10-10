import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controllers";

const router = Router();

router.get("/usuario", usuarioController.index);
router.post("/usuario", usuarioController.store);
router.get("/usuario/:id", usuarioController.show);
router.put("/usuario/:id", usuarioController.update);
router.delete("/usuario/:id", usuarioController.destroy);
router.post("/usuario/login", usuarioController.login);

export default router;
