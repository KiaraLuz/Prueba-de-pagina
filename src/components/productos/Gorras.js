import React from 'react'
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom"

export const Gorras = () => {
  return (
    <div>
      <section className="works">
        {
          trabajos.slice(12,13).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/gorras.jpg"} />
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
