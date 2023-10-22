import tratamiento_model from "../models/tratamiento.model.js";
import db from "../database/db.js";
//metodos crud

export const getAll = async (req, res) => {
    try {

        const tratamiento = await tratamiento_model.findAll();
        res.json(tratamiento);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const gettratamiento = async (req, res) => {
    try {

        const tratamiento = await tratamiento_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(tratamiento[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createtratamiento = async (req, res) => {
    try {
        await tratamiento_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatetratamiento = async (req, res) => {
    try {
        await tratamiento_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletetratamiento = async (req, res) => {
    try {
        await tratamiento_model.destroy({
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