import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
        console.log("Usuario registrado correctamente");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Sesión iniciada correctamente");
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresar correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Ingresar contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {registrando ? "Regístrate" : "Inicia sesión"}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h4>
        {registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}
        <button onClick={() => setRegistrando(!registrando)}>
          {registrando ? "Inicia sesión" : "Regístrate"}
        </button>
      </h4>
    </div>
  );
}

export default Login;
