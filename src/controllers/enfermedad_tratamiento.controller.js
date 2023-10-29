import enfermedad_tratamiento_model from "../models/enfermedad_tratamiento.model.js";
import db from "../database/db.js";
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

export const listarTratamientoPorEnfermedad = async (req, res) => {
    const id = req.params.id; // Suponiendo que el nombre de la enfermedad se pasa en el cuerpo de la solicitud

    try {
        const result = await db.query('SELECT * FROM listar_tratamientos_por_enfermedad($nombreEnfermedad)', {
            bind: {
                nombreEnfermedad: id, // Usa el nombre del parámetro en la consulta
            },
        });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const listarNoTratamientoPorEnfermedad = async (req, res) => {
    const id = req.params.id; // Suponiendo que el nombre de la enfermedad se pasa en el cuerpo de la solicitud

    try {
        const result = await db.query('SELECT * FROM obtener_tratamientos_no_relacionados($nombreEnfermedad)', {
            bind: {
                nombreEnfermedad: id, // Usa el nombre del parámetro en la consulta
            },
        });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};