import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Tratamiento = db.define("tratamiento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_del_tratamiento: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion_del_tratamiento: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "tratamientos",
    timestamps: false
});

export default Tratamiento;
