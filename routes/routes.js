import express from "express";
// Importar estudante Controller
import {
    getEstudantes,
} from "../controllers/estudante.js"

// Inicializar o router express
const router = express.Router();

router.get('/estudante', getEstudantes)
router.get('/estudante/:matricula', getEstudanteByMatr)

// export router
export default router