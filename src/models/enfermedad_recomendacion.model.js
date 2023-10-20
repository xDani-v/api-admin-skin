import db from "../database/db.js";
import { DataTypes } from "sequelize";

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

export default EnfermedadRecomendacion;
