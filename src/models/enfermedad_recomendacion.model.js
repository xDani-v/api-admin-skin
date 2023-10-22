import db from "../database/db.js";
import { DataTypes } from "sequelize";
import Recomendacion from "./recomendacion.model.js";
import Enfermedad from "./enfermedad.model.js";

const EnfermedadRecomendacion = db.define("enfermedad_recomendacion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_enfermedad: {
        type: DataTypes.INTEGER,
        references: {
            model: "enfermedades",
            key: "disease_id"
        }
    },
    id_recomendacion: {
        type: DataTypes.INTEGER,
        references: {
            model: "recomendaciones",
            key: "recommendation_id"
        }
    }
}, {
    tableName: "enfermedad_recomendacion",
    timestamps: false
});
EnfermedadRecomendacion.belongsTo(Enfermedad, { foreignKey: 'id_enfermedad' });
EnfermedadRecomendacion.belongsTo(Recomendacion, { foreignKey: 'id_recomendacion' });

export default EnfermedadRecomendacion;
