import express from 'express';
import { getAll, getrecomendacion, createrecomendacion, updaterecomendacion, deleterecomendacion, listarRecomendacionesPorEnfermedad } from "../controllers/recomendacion.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getrecomendacion);
router.post('/enfermedad', listarRecomendacionesPorEnfermedad);
router.post('/', createrecomendacion);
router.put('/:id', updaterecomendacion);
router.delete('/:id', deleterecomendacion);

export default router;