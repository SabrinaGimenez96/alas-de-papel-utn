import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db  from '../firebase';
import DetalleProducto from './DetalleProducto'

function PaginaDetalle() {
  
    const { sku } = useParams();
    const [producto, setProducto] = useState(null);
  
    useEffect(() => {
      const fetchProducto = async () => {
        const q = query(collection(db, 'libros'), where('sku', '==', sku));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setProducto({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        }
      };
  
      fetchProducto();
    }, [sku]);

  return (
    <div>
       <div>
        {producto ? <DetalleProducto producto={producto} /> : <p>Ups! Producto no encontrado</p>}
       </div>
    </div>
  )
}

export default PaginaDetalle