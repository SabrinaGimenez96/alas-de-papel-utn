import { useEffect, useState } from 'react'
import Producto from './Producto' 
import { collection, getDocs } from 'firebase/firestore';
import db  from '../firebase'
import { signOut, getAuth } from 'firebase/auth';

const auth = getAuth();

function Inicio() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {//fetchProductos función para obtener datos del Firebase
      const querySnapshot = await getDocs(collection(db, 'libros')); //con getDocs obtengo los documentos y con collection indico la colección que quiero leer
      const productosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(productosArray);
    };

    fetchProductos();
  }, []);

  return (
    <div>
        <h1>Lista de libros</h1> <button onClick={() => signOut(auth)}> Cerrar sesion</button>
        <div>
            {productos.map((producto) => (

            <Producto key={producto.sku} producto={producto}/>             
            
            ))}
        </div>
        
    </div>
  )
}

export default Inicio