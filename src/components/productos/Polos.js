import React from 'react'
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom"

export const Polos = () => {
  return (
    <div>

      <section className="works">
        {
          trabajos.slice(8,9).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/polos-personalizados-para-colegio-o-empresa.jpg"} />
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
          trabajos.slice(9,10).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/polos-pique-lascoste-20-1.jpg"} />
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
