import express from 'express';
import { getAll, getlogin, createlogin, updatelogin, deletelogin } from "../controllers/login.controller.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getlogin);
router.post('/', createlogin);
router.put('/:id', updatelogin);
router.delete('/:id', deletelogin);

export default router;