import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Producto = db.define("producto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_del_producto: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion_del_producto: {
        type: DataTypes.TEXT
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.STRING(255)
    },
    imagen: {
        type: DataTypes.STRING
    }
}, {
    tableName: "productos",
    timestamps: false
});

export default Producto;
