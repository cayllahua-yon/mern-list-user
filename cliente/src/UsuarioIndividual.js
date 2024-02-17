import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario, index}) {
    // console.log("ultimo")
   const navegar = useNavigate();

    function borrarUser(id) {

        Swal.fire({
            title: "Estas seguro?",
            text: "no podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Eliminado!",
                text: "Tu usuario ha sido eliminado.",
                icon: "success"
              });
              
                const idUser = id
                axios.post(`/api/user/eliminarUsuario/${idUser}`)
                    .then(res => {
                        console.log(res.data)
                        navegar(0)
                })
                .catch(err => console.log(err))

            }

          });


        // const idUser = id
        // // axios.post('/api/user/eliminarUsuario', {idUser: id})
        // axios.post(`/api/user/eliminarUsuario/${idUser}`)
        //     .then(res => {
        //         console.log(res.data)
        //         navegar(0)
        //     })
        //     .catch(err => console.log(err))
            // navegar(0)


    }

    return(
            <tr>
                    <th scope="row">{index  }</th>
                    <td>{usuario.idUser}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.telefono}</td>
                    <td>
                        <Link to={ `/editarUsuario/${usuario.idUser}` }>
                            <li className="btn btn-success">Editar</li>
                        </Link>
            
                        &nbsp;
                        <button onClick={()=>{borrarUser(usuario.idUser)}} type="button" className="btn btn-danger">Eliminar</button>
                    </td>
            </tr>
        
    )
}

export default UsuarioIndividual;