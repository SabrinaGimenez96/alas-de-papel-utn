import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Producto({ producto }) {
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <p>{producto.descripcion}</p>
        <Link to={`/producto/${producto.sku}`}>Ver Detalle</Link>        
    </div>
  )
}

Producto.propTypes = {
  producto: PropTypes.node
}

export default Producto