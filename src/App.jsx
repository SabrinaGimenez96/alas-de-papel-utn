import './App.css';
import PaginaDetalle from './components/PaginaDetalle';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import Login from './components/Login';

const auth = getAuth();//inicializa el servicio de autenticación de Firebase

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe(); // Limpiar la suscripción cuando el componente se desmonte
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Inicio /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:sku" element={<PaginaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
