import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

function EditarUsuario() {
    const params = useParams()

    //Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const rutaNavegacion = useNavigate();

    useEffect(()=>{
        // axios.post('/api/user/obtenerUsuario', {idUser: params.idUser})
        axios.get(`/api/user/obtenerUsuario/${params.idUser}`)
            .then( res => {
                 console.log(res.data[0])
                const datoDelUsuario = res.data[0];
                 setNombre(datoDelUsuario.nombre);
                 setEmail(datoDelUsuario.email);
                 setTelefono(datoDelUsuario.telefono);
            })
            .catch(err => console.log(err))
    }, [params.idUser])


    function editUser(){
        // nuevo objeto para actualizar usuario
        const actualizarUser = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idUser: params.idUser
        }
        // console.log(actualizarUser)

        // axios.post('/api/user/actualizarUsuario', actualizarUser)
        axios.put(`/api/user/actualizarUsuario/${params.idUser}`, actualizarUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            rutaNavegacion('/')
    }
    // console.log(params)

    return(
        <div className='container '>
            <div className='row  '>
                <div className='col text-center'>
                    <h2>Editar Usuario</h2>
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
                    <div className="mb-3  d-flex justify-content-between ">
                        <button onClick={editUser} className='btn btn-success'>Guardar</button>
                        <button onClick={()=>{rutaNavegacion('/')}} className='btn btn-primary '>Cancelar</button>
                    </div>

                </div>
                <div className='col'>
                </div>
                         
            </div>            
        </div>
    )
}

export default EditarUsuario;