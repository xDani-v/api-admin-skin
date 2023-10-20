import enfermedad_recomendacion_model from "../models/enfermedad_recomendacion.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const enfermedad_recomendacion = await enfermedad_recomendacion_model.findAll();
        res.json(enfermedad_recomendacion);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getenfermedad_recomendacion = async (req, res) => {
    try {

        const enfermedad_recomendacion = await enfermedad_recomendacion_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(enfermedad_recomendacion[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createenfermedad_recomendacion = async (req, res) => {
    try {
        await enfermedad_recomendacion_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateenfermedad_recomendacion = async (req, res) => {
    try {
        await enfermedad_recomendacion_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteenfermedad_recomendacion = async (req, res) => {
    try {
        await enfermedad_recomendacion_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}