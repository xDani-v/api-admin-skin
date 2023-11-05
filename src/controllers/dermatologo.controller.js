import dermatologo_model from "../models/dermatologo.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const dermatologo = await dermatologo_model.findAll();
        res.json(dermatologo);

    } catch (error) {
        res.json({ message: error.message })
    }
}


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

