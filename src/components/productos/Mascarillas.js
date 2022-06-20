import React from 'react'
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom"

export const Mascarillas = () => {
  return (
    <div>

      <section className="works">
        {
          trabajos.slice(0,1).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/mascarillas-sublimadas.jpg"} />
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
          trabajos.slice(1,2).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/mascarillas-bordadas.jpg"} />
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
      </section>
    </div>
  )
}
