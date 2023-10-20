import express from 'express';
import cors from 'cors';
import db from "./src/database/db.js";
import mainrutes from './src/routes/main.routes.js';


const app = express();
app.use(cors());
app.use(express.json())
app.use(mainrutes);

try {
    await db.authenticate();
    console.log("conexion exitosa");
} catch (error) {
    console.log(error);
}


app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.listen(3000, () => {
    console.log('Server running http://localhost:3000/')
})