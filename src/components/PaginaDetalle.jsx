import React from 'react'
import { useParams } from 'react-router-dom'
import DetalleProducto from './DetalleProducto'
import listaLibros from './listaLibros'

function PaginaDetalle() {
    const { sku } = useParams();
    const producto = listaLibros.find((producto) => producto.sku == sku);

  return (
    <div>
       <div>
        {producto ? <DetalleProducto producto={producto} /> : <p>Ups! Producto no encontrado</p>}
       </div>
    </div>
  )
}

export default PaginaDetalle