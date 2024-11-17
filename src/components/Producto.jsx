import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function Producto({ producto }) {
  return (
    <div>
      <img src={producto.img} alt={producto.img} />
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <p>{producto.descripcion}</p>
        <Link to={`/producto/${producto.sku}`}>Ver Detalle</Link>        
    </div>
  )
}

Producto.propTypes = {
  producto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
  }).isRequired,
};

export default Producto