import React from 'react'
import estilos from './About.module.css'
import imagen from '../../assets/sillaAbout.jpg'

export const About = () => {
  return (
    <div class={estilos.container}>
      <div className={estilos.content}>
      <h1 class={estilos.content}>
        ABOUT
      </h1>
      <p class={estilos.parrafo}>
      En [nombre de la barbería], nos apasiona ofrecer a nuestros clientes una experiencia de barbería excepcional.
      Nuestro talentoso equipo de barberos combina técnicas clásicas y modernas para brindarte cortes de cabello y estilos únicos.
      Nos enorgullece crear un ambiente acogedor donde puedas relajarte y disfrutar de un tiempo para ti. Utilizamos productos de alta calidad para cuidar tu cabello y piel,
      y nos aseguramos de que cada visita sea personalizada. Ven a [nombre de la barbería] y descubre lo que ofrecemos. 
      ¡Estamos ansiosos por conocerte y brindarte un servicio de primera clase!"
      </p>
      </div>
      <img className={estilos.imagen} src={imagen} alt='silla'>
      </img>
    </div>
  )
}
