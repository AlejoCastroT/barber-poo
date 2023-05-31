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
        loren ghghfhyjyerr jrjyrjyr h frmrmrr
      </p>
      </div>
      <img className={estilos.imagen} src={imagen}>
      </img>
    </div>
  )
}
