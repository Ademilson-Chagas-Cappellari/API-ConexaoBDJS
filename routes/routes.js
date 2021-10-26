import express from "express";
// Importar estudante Controller
import {
    getEstudantes,
    getEstudanteByMatr,
    createEstudante
} from "../controllers/estudanteCon.js"

// Inicializar o router express
const router = express.Router();

router.get('/estudante', getEstudantes)
router.get('/estudante/:matricula', getEstudanteByMatr)
router.post("/estudante", createEstudante)

// export router
export default router