import express from 'express';
import { getAll, getdermatologo, createdermatologo, updatedermatologo, deletedermatologo } from "../controllers/dermatologo.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getdermatologo);
router.post('/', createdermatologo);
router.put('/:id', updatedermatologo);
router.delete('/:id', deletedermatologo);

export default router;