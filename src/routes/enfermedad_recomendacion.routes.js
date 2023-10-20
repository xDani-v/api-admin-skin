import express from 'express';
import { getAll, getenfermedad_recomendacion, createenfermedad_recomendacion, updateenfermedad_recomendacion, deleteenfermedad_recomendacion } from "../controllers/enfermedad_recomendacion.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getenfermedad_recomendacion);
router.post('/', createenfermedad_recomendacion);
router.put('/:id', updateenfermedad_recomendacion);
router.delete('/:id', deleteenfermedad_recomendacion);

export default router;