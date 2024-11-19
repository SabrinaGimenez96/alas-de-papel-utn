import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './estilos/producto.css';


function Producto({ producto }) {
  return (
    <div className='contenedor-producto'>
      <div className="datos-producto">
      <img src={producto.img} alt={producto.img} />
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <Link to={`/producto/${producto.sku}`} className='link-producto'>Ver Detalle</Link>       
      </div> 
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