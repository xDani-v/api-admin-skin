import express from 'express';
import { getAll, getenfermedad_tratamiento, createenfermedad_tratamiento, updateenfermedad_tratamiento, deleteenfermedad_tratamiento, listarNoTratamientoPorEnfermedad, listarTratamientoPorEnfermedad } from "../controllers/enfermedad_tratamiento.controller.js";
import { listarNoRecomendacionesPorEnfermedad } from '../controllers/enfermedad_recomendacion.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getenfermedad_tratamiento);
router.post('/', createenfermedad_tratamiento);
router.put('/:id', updateenfermedad_tratamiento);
router.delete('/:id', deleteenfermedad_tratamiento);

router.get('/es/:id', listarTratamientoPorEnfermedad);
router.get('/en/:id', listarNoTratamientoPorEnfermedad);

export default router;