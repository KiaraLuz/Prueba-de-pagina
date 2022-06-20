import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className="header"> 
      <div className="logo">
        <img className="logo-principal" src={"/images/logo-principal.jpg"}/>
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
