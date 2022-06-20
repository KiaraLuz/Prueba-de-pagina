import React from 'react'
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom"

export const Chalecos = () => {
  return (
    <div>
      <section className="works">
        {
          trabajos.slice(15,16).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/chalecos-de-seguridad-c-s-cinta-reflectiva.jpg"} />
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
