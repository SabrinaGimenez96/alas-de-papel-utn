import React from 'react'
import { signOut, getAuth } from 'firebase/auth';
import './estilos/nav.css';

const auth = getAuth();

function Nav() {
  return (
<nav className='contenedor-nav'>
    <button onClick={() => signOut(auth)} id='logout-btn'>Cerrar sesión</button>
</nav>
  )
}

export default Nav