import express from 'express';
import { getAll, getenfermedad, createenfermedad, updateenfermedad, deleteenfermedad } from "../controllers/enfermedad.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getenfermedad);
router.post('/', createenfermedad);
router.put('/:id', updateenfermedad);
router.delete('/:id', deleteenfermedad);

export default router;