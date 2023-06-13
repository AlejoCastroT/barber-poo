import React from 'react'
import estilos from './precios.module.css'
import img from '../../assets/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg'

function Precios() {
  return (
    <section className={estilos.contacto} id='precios'>
      <h1 className={estilos.h1}>PRECIOS</h1>
    <div className={estilos.container}>
      <div className={estilos.containerCard}>
        <div className={estilos.card}>
          <figure>
            <img src={img} alt='imagen' className={estilos.img}></img>
          </figure>
          <div className={estilos.contenido}>
            <h3 className={estilos.h3}>Corte</h3>
            <p className={estilos.p}>estos precios son fijos xd</p>
            <a href='#g' className={estilos.a}>Leer mas</a>
          </div>
        </div>

        <div className={estilos.card}>
          <figure>
            <img src={img} alt='imagen' className={estilos.img}></img>
          </figure>
          <div className={estilos.contenido}>
            <h3 className={estilos.h3}>Corte</h3>
            <p className={estilos.p}>estos precios son fijos xd</p>
            <a href='#g' className={estilos.a}>Leer mas</a>
          </div>
        </div>

        <div className={estilos.card}>
          <figure>
            <img src={img} alt='imagen' className={estilos.img}></img>
          </figure>
          <div className={estilos.contenido}>
            <h3 className={estilos.h3}>Corte</h3>
            <p className={estilos.p}>estos precios son fijos xd</p>
            <a href='#g' className={estilos.a}>Leer mas</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Precios
