import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function DetalleProducto({ producto }) {
  return (
    <div>
        <img src={producto.img} alt={producto.img} />
        <h2>{producto.nombre}</h2>
        <p>Descripción: {producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <Link to={`/`}>Volver</Link> 
    </div>
  )
}

DetalleProducto.propTypes = {
  producto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetalleProducto;