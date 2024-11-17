import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase';
import DetalleProducto from './DetalleProducto';

function PaginaDetalle() {
  const { sku } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const q = query(collection(db, 'libros'), where('sku', '==', sku));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setProducto({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [sku]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      {producto ? (
        <DetalleProducto producto={producto} />
      ) : (
        <p>Ups! Producto no encontrado</p>
      )}
    </div>
  );
}

export default PaginaDetalle;
