import login_model from "../models/login.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const login = await login_model.findAll();
        res.json(login);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getlogin = async (req, res) => {
    try {

        const login = await login_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(login[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createlogin = async (req, res) => {
    try {
        await login_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatelogin = async (req, res) => {
    try {
        await login_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletelogin = async (req, res) => {
    try {
        await login_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}