import React from 'react';
import PropTypes from 'prop-types'

function DetalleProducto({ producto }) {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>Descripción: {producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
    </div>
  )
}

DetalleProducto.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetalleProducto;