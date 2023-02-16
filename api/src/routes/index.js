const { Router } = require('express');
const validator = require("../validators/validator")
const countryRouter = require("./country")
const activityRouter = require("./activity")
const seasonRouter = require("./season")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/seasons",seasonRouter)
router.use("/countries", countryRouter)
router.use("/activities",validator, activityRouter)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
