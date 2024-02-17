const express = require('express')
const morgan = require('morgan');


const conexionMongoose = require('./conexion')
const rutaUser = require('./routes/user.routes')


const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares - son funciones que se ejecutan antes de que llegen a las rutas
app.use(morgan('dev'))
app.use(express.json())
// Routes   -- importacion de archivos de rutas y modelos

app.use('/api/user/', rutaUser)

// Static Files

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`servidor inicializado en el puerto ${app.get('port')}`)
})