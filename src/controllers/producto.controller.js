import producto_model from "../models/producto.model.js";
import EnfermedadProducto from "../models/enfermedad_producto.model.js";

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
}

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
}

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

export const getProductsForEnfermedad = async (req, res) => {
    try {
        const { enfermedadId } = req.params; // Obtén el ID de la enfermedad desde los parámetros de la solicitud

        // Realiza una consulta en la tabla de relación para encontrar los productos relacionados con la enfermedad
        const enfermedadProductos = await EnfermedadProducto.findAll({
            where: { id_enfermedad: enfermedadId },
            include: Producto // Incluye los datos de los productos relacionados
        });

        if (enfermedadProductos.length === 0) {
            return res.status(404).json({ message: "No se encontraron productos para esta enfermedad" });
        }

        // Accede a los productos relacionados a través de la propiedad generada por Sequelize
        const productos = enfermedadProductos.map((relacion) => relacion.producto);
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};