import { Sequelize } from "sequelize";

const db = new Sequelize('data_enfermedades', 'root', 'no7MUE7j82pFZCJfWXV6hbTZj6XSIhjP', {
    host: 'dpg-ckopikvkc2qc73b4jpbg-a.singapore-postgres.render.com',
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