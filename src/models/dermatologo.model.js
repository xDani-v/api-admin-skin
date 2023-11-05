import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Dermatologos = db.define("dermatologos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    foto: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    provincia: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    linkws: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: "dermatologos",
    timestamps: false
});

export default Dermatologos;
