import React from 'react'
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom"

export const Poleras = () => {
  return (
    <div>

      <section className="works">
        {
          trabajos.slice(5,6).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/polera-cuello-redondo-unisex.jpg"} />
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
          trabajos.slice(6,7).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/poleras-con-capucha-y-bolsillos-canguro-unisex.jpg"} />
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
          trabajos.slice(7,8).map(trabajo => {
            return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/poleras-para-niños-niñas-cuello-redondo-estampado.jpg"} />
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
