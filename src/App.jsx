import './App.css';
import PaginaDetalle from './components/PaginaDetalle';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/producto/:sku' element={<PaginaDetalle/>} />
        </Routes>                 
    </Router>
  )
}

export default App
