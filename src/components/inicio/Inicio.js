import React from 'react'
import imagen from "../../assets/logo-barberia-calavera_43623-577.avif"
import "./Inicio.css"

export const Inicio = () => {
  return (
    <div class="container">
        <div>
            <p>
                Descripcion de la barberia
            </p>
        </div>        
        <img src={imagen} className='imagen'></img>
    </div>
  )
}
