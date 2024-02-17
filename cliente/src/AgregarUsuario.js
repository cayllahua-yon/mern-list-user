import React, { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AgregarUsuario() {
    // Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const rutaNavegacion = useNavigate();
    

    function addUser(){
        const user = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idUser: uniquid()
        }
        console.log(user)

        axios.post('/api/user/agregarUsuario', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            
        rutaNavegacion('/', {status: { key: "YON"}})
    }

    return(
        <div className='container '>
            <div className='row  '>
                <div className='col text-center'>
                    <h2>Crear Usuario</h2>
                </div>
            </div> 
            <div className='row justify-content-start'>
                <div className='col'>
                </div>
                <div className='col '>

                    <div className="mb-3  ">
                        <label htmlFor="nombre" className='form-label d-flex' >Nombre</label>                    
                        <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className="form-control" id="nombre" placeholder="ingrese su nombre"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-flex">Email</label>                    
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="email" placeholder="ingrese su email"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label d-flex">Telefono</label>                    
                        <input type="text" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} className="form-control" id="telefono" placeholder="ingrese su telefono"></input>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <button onClick={addUser} className='btn btn-success '>Guardar</button>
                        <button onClick={()=>{rutaNavegacion('/')}} className='btn btn-primary'>Cancelar</button>
                    </div>

                </div>
                <div className='col'>
                </div>
                         
            </div>            
        </div>
    )
}

export default AgregarUsuario;