import { Router } from "express";
import {
  createUserCtrl,
  getUsersCtrl,
  getUserByIdCtrl,
} from "../controllers/usuario.controllers.js";
import { validateSchema } from "../middleware/validacion.js";
import { createUserSchema } from "../model/usuario.model.js";

const userRouter = Router();

userRouter.get("/", getUsersCtrl);
userRouter.get("/:id", getUserByIdCtrl);

// con createCheckSchema se validan los campos del body y luego
// se pasa a validateSchema para que se ejecute la validación
userRouter.post("/", createUserSchema, validateSchema, createUserCtrl);

export { userRouter };
