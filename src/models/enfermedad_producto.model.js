import db from "../database/db.js";
import { DataTypes } from "sequelize";

const EnfermedadProducto = db.define("enfermedad_producto", {
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
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: "productos",
            key: "product_id"
        }
    }
}, {
    tableName: "enfermedad_producto",
    timestamps: false
});

export default EnfermedadProducto;
