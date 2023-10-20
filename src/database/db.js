import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


const db = new Sequelize(process.env.DATA_BASE, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    port: 5432, // The port number of your PostgreSQL database
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // Establece "true" para requerir SSL
            rejectUnauthorized: false // Opción adicional para evitar errores de autorización
        }
    }
});

export default db;