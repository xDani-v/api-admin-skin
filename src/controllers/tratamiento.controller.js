import tratamiento_model from "../models/tratamiento.model.js";
import EnfermedadTratamiento from "../models/enfermedad_tratamiento.model.js";
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

export const getTratamientosForEnfermedad = async (req, res) => {
    try {
        const { enfermedadId } = req.params; // Obtén el ID de la enfermedad desde los parámetros de la solicitud

        // Realiza una consulta en la tabla de relación para encontrar los tratamientos relacionados con la enfermedad
        const enfermedadTratamientos = await EnfermedadTratamiento.findAll({
            where: { id_enfermedad: enfermedadId },
            include: Tratamiento // Incluye los datos de los tratamientos relacionados
        });

        if (enfermedadTratamientos.length === 0) {
            return res.status(404).json({ message: "No se encontraron tratamientos para esta enfermedad" });
        }

        // Accede a los tratamientos relacionados a través de la propiedad generada por Sequelize
        const tratamientos = enfermedadTratamientos.map((relacion) => relacion.tratamiento);
        res.json(tratamientos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};