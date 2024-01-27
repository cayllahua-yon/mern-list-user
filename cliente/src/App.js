
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h1>
          Crud de <code>MERN</code> para usuarios.
        </h1>
        
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
