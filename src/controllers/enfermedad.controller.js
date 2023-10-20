import enfermedad_model from "../models/enfermedad.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const enfermedad = await enfermedad_model.findAll();
        res.json(enfermedad);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getenfermedad = async (req, res) => {
    try {

        const enfermedad = await enfermedad_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(enfermedad[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createenfermedad = async (req, res) => {
    try {
        await enfermedad_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateenfermedad = async (req, res) => {
    try {
        await enfermedad_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteenfermedad = async (req, res) => {
    try {
        await enfermedad_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}