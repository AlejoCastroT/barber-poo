import React from 'react';
import imagen from "../../assets/logo-barberia-calavera_43623-577.avif";
import "./Inicio.css";

export const Inicio = () => {
  return (
    <div className="container">
        <div>
            <p>
                Descripción de la barbería
            </p>
        </div>        
        <img src={imagen} className="imagen" alt="Logo de la barbería" />
    </div>
  );
};
