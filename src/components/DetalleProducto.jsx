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
  producto: PropTypes.node
}

export default DetalleProducto;