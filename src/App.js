import './App.css';
import Formulario from './components/Formulario';
import Notificaciones from './components/Notificaciones';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Formulario/>}></Route>
      <Route path='/notificaciones' element={<Notificaciones/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
