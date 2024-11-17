import './App.css';
import PaginaDetalle from './components/PaginaDetalle';
import Inicio from './components/Inicio';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

const auth = getAuth();

function App() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={usuario ? <Inicio /> : <Navigate to="/login" />} />
        <Route path="/login" element={usuario ? <Navigate to="/" /> : <Login />} />
        <Route path="/producto/:sku" element={usuario ? <PaginaDetalle /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
