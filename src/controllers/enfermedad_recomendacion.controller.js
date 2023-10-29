import enfermedad_recomendacion_model from "../models/enfermedad_recomendacion.model.js";
import db from "../database/db.js";
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


export const listarRecimendacionPorEnfermedad = async (req, res) => {
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

export const listarNoRecomendacionesPorEnfermedad = async (req, res) => {
    const id = req.params.id; // Suponiendo que el nombre de la enfermedad se pasa en el cuerpo de la solicitud

    try {
        const result = await db.query('SELECT * FROM obtener_recomendaciones_no_relacionadas($nombreEnfermedad)', {
            bind: {
                nombreEnfermedad: id, // Usa el nombre del parámetro en la consulta
            },
        });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};