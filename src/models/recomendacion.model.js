import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Recomendacion = db.define("recomendacion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    nombre_de_la_recomendacion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion_de_la_recomendacion: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "recomendaciones",
    timestamps: false
});



export default Recomendacion;
