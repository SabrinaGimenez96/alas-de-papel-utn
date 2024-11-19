import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './estilos/ventanaDetalle.css';

function DetalleProducto({ producto }) {
  return (
    <div className='contenedor-detalle'>
      <div className="detalles">
          <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <p>SKU: {producto.sku}</p>
        <Link to={`/`} className='link-volver' >Volver</Link>
      </div>
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