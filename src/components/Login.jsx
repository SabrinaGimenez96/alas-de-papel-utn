import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './estilos/login.css';

const auth = getAuth();

function Login() {
  const [registrando, setRegistrando] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setError('');
      navigate("/"); // Redirige a la página de inicio después del registro o login
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="container">
        <h1>Alas de papel</h1>      
      <div className="formulario">
        <h2>Tu próxima historia te espera</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Ingresar correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input
          type="password" placeholder="Ingresar contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button id= "primer-btn" type="submit">
          {registrando ? "Regístrate" : "Inicia sesión"}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h4>
        {registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}
        <button id="segundo-btn" onClick={() => setRegistrando(!registrando)}>
          {registrando ? "Inicia sesión" : "Regístrate"}
        </button>
      </h4>
      </div>      
    </div>
  );
}

export default Login;
