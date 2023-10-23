import producto_model from "../models/producto.model.js";
import db from "../database/db.js";
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
        // Obtiene los datos de la imagen en formato base64 desde el cuerpo de la solicitud
        const { nombre_del_producto, descripcion_del_producto, precio, disponibilidad, imagenBase64 } = req.body;

        // Convierte la imagen en un array de bytes (Buffer) a partir del base64
        const imagenData = Buffer.from(imagenBase64, 'base64');

        // Crea el producto con la imagen en formato BYTEA
        await producto_model.create({
            nombre_del_producto,
            descripcion_del_producto,
            precio,
            disponibilidad,
            imagen: imagenData
        });

        res.json({
            "message": "Registro creado"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateproducto = async (req, res) => {
    try {
        // Obtiene los datos de la imagen en formato base64 desde el cuerpo de la solicitud
        const { nombre_del_producto, descripcion_del_producto, precio, disponibilidad, imagenBase64 } = req.body;

        // Convierte la imagen en un array de bytes (Buffer) a partir del base64
        const imagenData = Buffer.from(imagenBase64, 'base64');

        // Realiza la actualización del producto, incluyendo la imagen en formato BYTEA
        await producto_model.update(
            {
                nombre_del_producto,
                descripcion_del_producto,
                precio,
                disponibilidad,
                imagen: imagenData
            },
            {
                where: { id: req.params.id }
            }
        );

        res.json({
            "message": "Registro actualizado"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
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

export const listarProductosPorEnfermedad = async (req, res) => {
    const id = req.params.id; // Suponiendo que el nombre de la enfermedad se pasa en el cuerpo de la solicitud

    try {
        const result = await db.query('SELECT * FROM listar_productos_por_enfermedad($nombreEnfermedad)', {
            bind: {
                nombreEnfermedad: id, // Usa el nombre del parámetro en la consulta
            },
        });
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};