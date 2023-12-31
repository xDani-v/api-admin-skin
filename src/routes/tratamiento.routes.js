import express from 'express';
import { getAll, gettratamiento, createtratamiento, updatetratamiento, deletetratamiento } from "../controllers/tratamiento.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', gettratamiento);
router.post('/', createtratamiento);
router.put('/:id', updatetratamiento);
router.delete('/:id', deletetratamiento);

export default router;