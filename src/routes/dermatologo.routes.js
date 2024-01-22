import express from 'express';
import { getAll, getdermatologo, createdermatologo, updatedermatologo, deletedermatologo } from "../controllers/dermatologo.controller.js";

const router = express.Router();
/**
 * Route serving a list of all dermatologists.
 * @name get/
 * @function
 * @memberof module:dermatologo
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', getAll);
/**
 * Route serving a dermatologist based on ID.
 * @name get/:id
 * @function
 * @memberof module:dermatologo
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/:id', getdermatologo);
/**
 * Route serving the creation of a new dermatologist.
 * @name post/
 * @function
 * @memberof module:dermatologo
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/', createdermatologo);
/**
 * Route serving the update of a dermatologist based on ID.
 * @name put/:id
 * @function
 * @memberof module:dermatologo
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/:id', updatedermatologo);
/**
 * Route serving the deletion of a dermatologist based on ID.
 * @name delete/:id
 * @function
 * @memberof module:dermatologo
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.delete('/:id', deletedermatologo);

export default router;