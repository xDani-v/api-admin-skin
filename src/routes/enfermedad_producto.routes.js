import express from 'express';
import { getAll, getenfermedad_producto, createenfermedad_producto, updateenfermedad_producto, deleteenfermedad_producto } from "../controllers/enfermedad_producto.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getenfermedad_producto);
router.post('/', createenfermedad_producto);
router.put('/:id', updateenfermedad_producto);
router.delete('/:id', deleteenfermedad_producto);

export default router;