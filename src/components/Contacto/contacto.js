import React from 'react'
import estilos from './contacto.module.css'

const Contacto = () => {
  return (
    <section className={estilos.contacto}>
      <h1 className={estilos.h1}>CONTACTO</h1>
      <div className={estilos.contactoContainer}>
        <div className={estilos.fromContainer}>
          <h3 className={estilos.h3}>Envíenos un mensaje</h3>
          <from className={estilos.contactoFrom}>
            <input type='text' placeholder='Your Name' required className={estilos.input}/>
            <input type='email' placeholder='Enter Your Email...' required className={estilos.input}/>
            <textarea cols={30} rows={10} placeholder='Write Message Here..' required className={estilos.input}></textarea>
            <input type='submit' value='Enviar' className={estilos.sendButton} id={estilos.input} />
          </from>
        </div>

<div className={estilos.mapa}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.35966246781!2d-75.62241107983745!3d6.24428717166344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1685957321614!5m2!1ses!2sco"
    width="100%"
    height="100%"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </section>
  )
}

export default Contacto;