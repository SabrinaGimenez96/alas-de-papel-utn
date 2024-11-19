import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './estilos/login.css';

const auth = getAuth();
const db = getFirestore();

function Login() {
  const [registrando, setRegistrando] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (registrando) {
        // Crear usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Actualizar perfil del usuario con nombre completo
        await updateProfile(user, {
          displayName: `${nombre} ${apellido}`
        });

        // Guardar datos adicionales en Firestore
        await setDoc(doc(db, "usuarios", user.uid), {
          nombre,
          apellido,
          email
        });
      } else {
        // Iniciar sesión
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
          {registrando && (
            <>
              <input
                type="text"
                placeholder="Ingresar nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Ingresar apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </>
          )}
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
          <button id="primer-btn" type="submit">
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
