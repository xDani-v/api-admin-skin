import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Enfermedad = db.define("enfermedad", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    nombre_de_la_enfermedad: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    caracteristica: {
        type: DataTypes.STRING(500)
    }
}, {
    tableName: "enfermedades",
    timestamps: false
});

export default Enfermedad;
