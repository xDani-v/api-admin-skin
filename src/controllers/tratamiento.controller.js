import tratamiento_model from "../models/tratamiento.model.js";

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

