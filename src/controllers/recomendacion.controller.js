import recomendacion_model from "../models/recomendacion.model.js";
import db from "../database/db.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const recomendacion = await recomendacion_model.findAll();
        res.json(recomendacion);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getrecomendacion = async (req, res) => {
    try {

        const recomendacion = await recomendacion_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(recomendacion[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createrecomendacion = async (req, res) => {
    try {
        await recomendacion_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updaterecomendacion = async (req, res) => {
    try {
        await recomendacion_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleterecomendacion = async (req, res) => {
    try {
        await recomendacion_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const listarRecomendacionesPorEnfermedad = async (req, res) => {
    const id = req.params.id; // Suponiendo que el nombre de la enfermedad se pasa en el cuerpo de la solicitud

    try {
        const result = await db.query('SELECT * FROM listar_recomendaciones_por_enfermedad($nombreEnfermedad)', {
            bind: {
                nombreEnfermedad: id, // Usa el nombre del parámetro en la consulta
            },
        });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};