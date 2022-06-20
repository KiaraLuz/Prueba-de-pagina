import React from 'react'

export const Servicios = () => {
  return (
    <div className="page">
      <h1 className="heading">Servicios</h1>
      <section className="services">

        <article className="service">
          <h2>Bordado</h2>
          <p>Bordado personalizado de alto relieve</p>
          <img className='imagen-servicios' src={"/images/bordadas.jpg"} />
        </article>

        <article className="service">
          <h2>Sublimado</h2>
          <p>Sublimado personalizado</p>
          <img className='imagen-servicios' src={"/images/sublimadas.jpg"} />
        </article>

        <article className="service">
          <h2>Estampado</h2>
          <p>Estampado personalizado</p>
          <img className='imagen-servicios' src={"/images/estampadas.jpg"} />
        </article>
        
      </section>
    </div>
  )
}
