const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mernpersonal');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion exitosa a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexion a MongoDB')})

module.exports = mongoose