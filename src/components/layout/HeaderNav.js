import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className="header"> 
      <div className="logo">
        <img className="logo-principal" src="https://scontent.flim4-2.fna.fbcdn.net/v/t39.30808-6/277533123_1387737298408915_6189120219329447071_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFohmhLJ33frKjI-5GrILRs0kcoJOAm7jjSRygk4CbuOMpEvcHkiy_6u21GPKrrwqkFTx0Lek_rlWALQmLfhpDc&_nc_ohc=BMkeZR7jBkEAX-3BX95&_nc_ht=scontent.flim4-2.fna&oh=00_AT_fgqbQ7a6v3XTG9-yqVSMQOoMxxEbKJLbGRoDSLiiLMw&oe=62A8F9E2"/>
        <img className="logo-texto" src={"/images/solo-texto.png"}/>
      </div>
      
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/inicio" 
              className={ ({isActive}) => isActive ? "activado" : ""}>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/productos"
              className={ ({isActive}) => isActive ? "activado" : ""}>
              Productos
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/servicios"
              className={ ({isActive}) => isActive ? "activado" : ""}>
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/curriculum"
              className={ ({isActive}) => isActive ? "activado" : ""}>
                Curriculum
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/contacto"
              className={ ({isActive}) => isActive ? "activado" : ""}>
                Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
