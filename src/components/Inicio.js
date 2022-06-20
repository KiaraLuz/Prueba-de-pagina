import React from 'react';
import { Link } from "react-router-dom"
import { trabajos } from './data/trabajos';

export const Inicio = () => {
  return (
    <div className="home">

      <h1>
        Hola, soy <strong>Carmen Pérez Quispe</strong> y soy costurera en Perú
        , vendo <strong>mascarillas, buzos y poleras</strong> con diseños personalizados.
      </h1>

      <h2 className="title">
        Te confecciono una prenda de vestir a tu gusto.
        <br />
        <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className="last-works">
        <h2 className="heading">Algunos de los productos</h2>
        <p>Estas son algunas de las prendas que confecciono.</p>
        
        <section className="works">
        {
          trabajos.slice(2,3).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/mascarillas-estampadas.jpg"} />
              </div>

              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.material}</h3>
              <p>{trabajo.descripcion}</p>

            </article>
            );
          })
        }

        {
          trabajos.slice(3,4).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/buzos-jogger-de-mujer.JPG"} />
              </div>

              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.material}</h3>
              <p>{trabajo.descripcion}</p>

            </article>
            );
          })
        }
      </section>
      </section>
    </div>
  )
}
