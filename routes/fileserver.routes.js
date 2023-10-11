import { fileserverctrl } from "../google-services/controllers/fileserver.controller";
import { Router } from "express";

const PDFsaver = Router();

PDFsaver.post("/guardar-PDF", fileserverctrl.guardarPDF);

export { PDFsaver };