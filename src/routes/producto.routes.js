import express from 'express';
import { getAll, getproducto, createproducto, updateproducto, deleteproducto, getProductsForEnfermedad } from "../controllers/producto.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getproducto);
router.get('/enfermedad/:id', getProductsForEnfermedad);
router.post('/', createproducto);
router.put('/:id', updateproducto);
router.delete('/:id', deleteproducto);

export default router;