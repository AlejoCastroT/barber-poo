import React from 'react';
import imagen from "../../assets/henry-co-a2VJlQ3yxmQ-unsplash.jpg"
import estilos from "./Inicio.module.css";

export const Inicio = () => {
  return (
    <div className={estilos.container}>
        <div>
            <p>
                Descripción de la barbería
            </p>
        </div>        
        <img src={imagen} className={estilos.imagen} alt="Logo de la barbería" />
    </div>
  );
};
