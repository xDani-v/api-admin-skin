import dermatologo_model from "../models/dermatologo.model.js";

/**
 * Get all dermatologists.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getAll = async (req, res) => {
    try {

        const dermatologo = await dermatologo_model.findAll();
        res.json(dermatologo);

    } catch (error) {
        res.json({ message: error.message })
    }
}


/**
 * Get a dermatologist by ID.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getdermatologo = async (req, res) => {
    try {

        const dermatologo = await dermatologo_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(dermatologo[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}

/**
 * Create a new dermatologist.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const createdermatologo = async (req, res) => {
    try {
        await dermatologo_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
};

/**
 * Update a new dermatologist.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const updatedermatologo = async (req, res) => {
    try {
        await dermatologo_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
};

/**
 * Delete a new dermatologist.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const deletedermatologo = async (req, res) => {
    try {
        await dermatologo_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

