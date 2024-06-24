const expres = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const conexion = require('./database/db');
const app = expres()

app.use(expres.urlencoded({extends:false}))
app.use(expres.json())

app.use(cors())

dotenv.config({path: './.env'})

app.use('/', require('./routes/auth'))

app.listen(5000, (req, res)=>{
    console.log('Servidor corriendo en el puerto 5000')
})