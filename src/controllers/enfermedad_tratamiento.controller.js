import enfermedad_tratamiento_model from "../models/enfermedad_tratamiento.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const enfermedad_tratamiento = await enfermedad_tratamiento_model.findAll();
        res.json(enfermedad_tratamiento);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getenfermedad_tratamiento = async (req, res) => {
    try {

        const enfermedad_tratamiento = await enfermedad_tratamiento_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(enfermedad_tratamiento[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createenfermedad_tratamiento = async (req, res) => {
    try {
        await enfermedad_tratamiento_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateenfermedad_tratamiento = async (req, res) => {
    try {
        await enfermedad_tratamiento_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteenfermedad_tratamiento = async (req, res) => {
    try {
        await enfermedad_tratamiento_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}