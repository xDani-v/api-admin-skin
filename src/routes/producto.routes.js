import express from 'express';
import { getAll, getproducto, createproducto, updateproducto, deleteproducto } from "../controllers/producto.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getproducto);
router.post('/', createproducto);
router.put('/:id', updateproducto);
router.delete('/:id', deleteproducto);

export default router;