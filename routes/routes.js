import express from "express";
// Importar estudante Controller
import {
    getEstudantes,
    getEstudanteByMatr,
    createEstudante,
    updateEstudante,
    deleteEstudande
} from "../controllers/estudanteCon.js"

// Inicializar o router express
const router = express.Router();

router.get('/estudante', getEstudantes)
router.get('/estudante/:matricula', getEstudanteByMatr)
router.post("/estudante", createEstudante)
router.put("/estudante/:matricula", updateEstudante)
router.delete("/estudante/:matricula", deleteEstudande)

// export router
export default router