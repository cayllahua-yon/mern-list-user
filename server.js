const express = require('express')
const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares - son funciones que se ejecutan antes de que llegen a las rutas


// Routes 


// Static Files

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`servidor inicializado en el puerto ${app.get('port')}`)
})