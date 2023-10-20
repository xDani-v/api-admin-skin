import express from 'express';

import enfermedad from "../routes/enfermedad.routes.js";
import producto from "../routes/producto.routes.js";
import recomendacion from "../routes/recomendacion.routes.js";
import tratamiento from "../routes/tratamiento.routes.js";
import login from "../routes/login.routes.js";
import enfermedad_producto from "../routes/enfermedad_producto.routes.js";
import enfermedad_recomendacion from "../routes/enfermedad_recomendacion.routes.js";
import enfermedad_tratamiento from "../routes/enfermedad_tratamiento.routes.js";

const router = express.Router();


router.use('/login', login);
router.use('/enfermedad', enfermedad);

router.use('/producto', producto);

router.use('/recomendacion', recomendacion);

router.use('/tratamiento', tratamiento);


router.use('/enfermedad_producto', enfermedad_producto);

router.use('/enfermedad_recomendacion', enfermedad_recomendacion);

router.use('/enfermedad_tratamiento', enfermedad_tratamiento);




export default router;