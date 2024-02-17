import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import axios from 'axios';

function ListaUsuarios() {

    const [dataUsuario, setDataUsuario] = useState([]);


    useEffect( ()=>{
         axios.get('/api/user/obtenerUsuarios')
            .then(res => {
                // console.log(res.data);
                setDataUsuario(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(dataUsuario)

    // imprimir todos los dato - parasa los datos a usuario individual
    const allUser = dataUsuario.map( (usuario, index)  => {
        // console.log(usuario)
        return (
            <tbody key={index}>
                <UsuarioIndividual index={index + 1}  usuario={usuario} />                         
            </tbody>                               
        )
    });

    return(
        <div >
            {/* AQUI LO QUE PERMANECE */}
            <h2 >Lista de usuarios</h2>              
            {/*aqui  <UsuarioIndividual /> */}   
            {/* {
                dataUsuario.map( (usuario, index)  => {

                    return (
                        <div key={index}>
                            <UsuarioIndividual usuario={usuario} />                         
                        </div>                               
                    )
                })
            }         */}

            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Gmail</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>            
                    {allUser}  
            </table>
            
        </div>
    )
}

export default ListaUsuarios;