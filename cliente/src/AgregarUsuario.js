import React from 'react';

function AgregarUsuario() {
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
                        <label for="nombre" className='form-label d-flex' >Nombre</label>                    
                        <input type="text" className="form-control" id="nombre" placeholder="ingrese su nombre"></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label d-flex">Email</label>                    
                        <input type="email" className="form-control" id="email" placeholder="ingrese su email"></input>
                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label d-flex">Telefono</label>                    
                        <input type="text" className="form-control" id="telefono" placeholder="ingrese su telefono"></input>
                    </div>
                </div>
                <div className='col'>
                </div>
                         
            </div>            
        </div>
    )
}

export default AgregarUsuario;