import express from 'express';
import { getAll, getenfermedad_tratamiento, createenfermedad_tratamiento, updateenfermedad_tratamiento, deleteenfermedad_tratamiento } from "../controllers/enfermedad_tratamiento.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getenfermedad_tratamiento);
router.post('/', createenfermedad_tratamiento);
router.put('/:id', updateenfermedad_tratamiento);
router.delete('/:id', deleteenfermedad_tratamiento);

export default router;