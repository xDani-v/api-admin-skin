import db from "../database/db.js";
import { DataTypes } from "sequelize";

const EnfermedadTratamiento = db.define("enfermedad_tratamiento", {
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
    id_tratamiento: {
        type: DataTypes.INTEGER,
        references: {
            model: "tratamientos",
            key: "treatment_id"
        }
    }
}, {
    tableName: "enfermedad_tratamiento",
    timestamps: false
});

export default EnfermedadTratamiento;
