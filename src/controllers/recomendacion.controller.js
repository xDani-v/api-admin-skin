import recomendacion_model from "../models/recomendacion.model.js";
import EnfermedadRecomendacion from "../models/enfermedad_recomendacion.model.js"; // Importa el modelo de la tabla de relación

//metodos crud

export const getAll = async (req, res) => {
    try {

        const recomendacion = await recomendacion_model.findAll();
        res.json(recomendacion);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const getrecomendacion = async (req, res) => {
    try {

        const recomendacion = await recomendacion_model.findAll(
            {
                where: { id: req.params.id }
            }
        );
        res.json(recomendacion[0]);

    } catch (error) {
        res.json({ message: error.message })
    }
}


export const createrecomendacion = async (req, res) => {
    try {
        await recomendacion_model.create(req.body);
        res.json({
            "message": "Registro creado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updaterecomendacion = async (req, res) => {
    try {
        await recomendacion_model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro actualizado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleterecomendacion = async (req, res) => {
    try {
        await recomendacion_model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "Registro eliminado"
        });

    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getRecomendacionesForEnfermedad = async (req, res) => {
    try {
        const { enfermedadId } = req.params; // Obtén el ID de la enfermedad desde los parámetros de la solicitud

        // Realiza una consulta en la tabla de relación para encontrar las recomendaciones relacionadas con la enfermedad
        const enfermedadRecomendaciones = await EnfermedadRecomendacion.findAll({
            where: { id_enfermedad: enfermedadId },
            include: Recomendacion // Incluye los datos de las recomendaciones relacionadas
        });

        if (enfermedadRecomendaciones.length === 0) {
            return res.status(404).json({ message: "No se encontraron recomendaciones para esta enfermedad" });
        }

        // Accede a las recomendaciones relacionadas a través de la propiedad generada por Sequelize
        const recomendaciones = enfermedadRecomendaciones.map((relacion) => relacion.recomendacion);
        res.json(recomendaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
