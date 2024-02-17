const express = require('express');
const router= express.Router();

//----------------Creando el model Schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idUser: String,
})

const modelUser = mongoose.model('UserSchema', userSchema);
//----------------Fin de model para usuario se utiliza mediante modelUser

//----------------------CRUD---------------------------------
router.post('/agregarUsuario', async (req, res)=>{
    // res.send('Esta desordenado pero dale')
    const {nombre,email, telefono, idUser} = req.body;

    const newUser = new modelUser({
        nombre: nombre,
        email: email,
        telefono: telefono,
        idUser: idUser
    })

    await newUser.save();
    
    res.json({status: "Usuario guardado correctamenta"})

})

//all user
router.get('/obtenerUsuarios', async (req, res)=>{
    const respuesta = await modelUser.find();
    // console.log(respuesta)
    res.json(respuesta)
})

// one User  -> verificar de otra manera
// router.post('/obtenerUsuario', async (req, res)=>{
    router.get('/obtenerUsuario/:idUser', async (req, res)=>{
    console.log(req.params)
    // const respuesta = await modelUser.find({idUser: req.body.idUser});
    const respuesta = await modelUser.find({idUser: req.params.idUser});
    // console.log(respuesta) 
    res.json(respuesta)

})

// actualizar 
// post   /actualizarUsuario
router.put('/actualizarUsuario/:idUser', async (req, res)=>{
    const {nombre,email, telefono} = req.body;
    console.log(req.params)
    
    const updateUser = {
        nombre,
        email,
        telefono
    }

    // await modelUser.findOneAndUpdate({idUser: req.body.idUser}, updateUser)
    await modelUser.findOneAndUpdate({idUser: req.params.idUser}, updateUser)
    
    res.json({status: "Usuario actualizado"})

})

// borar 
//   /eliminarUsuario
router.post('/eliminarUsuario/:id', async (req, res)=>{

    // await modelUser.findOneAndDelete({idUser: req.body.idUser})
    await modelUser.findOneAndDelete(req.params.idUser)
    
    res.json({status: "usuario borrado"})

})

module.exports = router;