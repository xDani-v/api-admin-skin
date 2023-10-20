import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Login = db.define("login", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "login",
    timestamps: false
});

export default Login;
