import express from 'express';
import { getAll, gettratamiento, createtratamiento, updatetratamiento, deletetratamiento, listarTratamientoPorEnfermedad } from "../controllers/tratamiento.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', gettratamiento);
router.get('/enfermedad/:id', listarTratamientoPorEnfermedad);
router.post('/', createtratamiento);
router.put('/:id', updatetratamiento);
router.delete('/:id', deletetratamiento);

export default router;