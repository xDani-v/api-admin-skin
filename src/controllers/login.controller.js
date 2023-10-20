import login_model from "../models/login.model.js";
import jwt from "jsonwebtoken";

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
export const login = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const user = await login_model.findOne({
            where: {
                usuario: usuario,
                password: password, // ¡Nota! Esto no es seguro, solo para fines de demostración.
            },
        });

        if (user) {
            // Las credenciales son válidas, puedes generar un token de autenticación y devolverlo.
            const token = jwt.sign({ id: user.id, usuario: user.usuario }, "tu_secreto_secreto", { expiresIn: "1h" });

            // Guardar el token en Local Storage


            res.json({ message: "Inicio de sesión exitoso", token: token });
        } else {
            res.status(401).json({ message: "Credenciales inválidas" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};