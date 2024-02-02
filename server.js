const express = require('express')
const morgan = require('morgan');


const conexionMongoose = require('./conexion')

const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares - son funciones que se ejecutan antes de que llegen a las rutas
app.use(morgan('dev'))

// Routes 


// Static Files

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`servidor inicializado en el puerto ${app.get('port')}`)
})