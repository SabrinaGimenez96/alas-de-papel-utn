import React from 'react'
import Producto from './Producto' 
import listaLibros from './listaLibros'


function Inicio() {
  return (
    <div>
        <h1>Lista de libros</h1>
        <div>
            {listaLibros.map((producto) => (

            <Producto key={producto.sku} producto={producto}/>             
            
            ))}
        </div>
        
    </div>
  )
}

export default Inicio