
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        
        <nav className="navbar navbar-expand-lg bg-dark  border-bottom border-body" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="."> Crud de <code>MERN</code> para usuarios. </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href=".">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=".">Nota</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      {/* comenzamos a crear las rutas */}
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<ListaUsuarios/>} exact >  </Route>             {/* EN el inicio estaria cargando esta porcion de codigo /  */}
         <Route path='/agregarUsuario' element={<AgregarUsuario/> } exact >  </Route>  
         <Route path='/editarUsuaria' element={<EditarUsuario/>}  exact >  </Route>  
        </Routes>
         
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
