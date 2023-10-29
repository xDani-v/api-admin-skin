import producto_model from "../models/producto.model.js";

//metodos crud

export const getAll = async (req, res) => {
    try {

        const producto = await producto_model.findAll();
        res.json(producto);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getproducto = async (req, res) => {
    try {

        const producto = await producto_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(producto[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createproducto = async (req, res) => {
    try {
        await producto_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
};


export const updateproducto = async (req, res) => {
    try {
        await producto_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
};


export const deleteproducto = async (req, res) => {
    try {
        await producto_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

