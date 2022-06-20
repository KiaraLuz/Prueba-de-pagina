import React from 'react'
import { Outlet, NavLink  } from "react-router-dom"

export const ListadoTrabajos = () => {
  return (
    <>
      <nav>
        <ul className="lista-de-productos">
          <div className='grupo-1'>
            <li className="productos-disponibles">
              <NavLink 
                to="/productos/todo" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Todo
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/mascarillas" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Mascarillas
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
              to="/productos/buzos" 
              className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                Buzos
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/poleras" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Poleras
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/polos" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Polos
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/tazas" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Tazas
              </NavLink>
            </li>
          </div>

          <div className='grupo-2'>
            <li className="productos-disponibles">
              <NavLink 
                to="/productos/layner" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Layner
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/gorras" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Gorras
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/camisas-blusas" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Camisas y blusas
              </NavLink>
            </li>

            <li className="productos-disponibles">
              <NavLink 
                to="/productos/chalecos" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Chalecos
              </NavLink>
            </li>
          </div>
          <div className='grupo-3'>
            <li>
              <NavLink 
                to="/productos/mousepad" 
                className={ ({isActive}) => isActive ? "activado" : "desactivado"}>
                  Mousepad
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>

      <div>
        {/*Quiero cargar aquí los componentes de las sub rutas*/}
        <Outlet />
      </div>
    </>
  )
}
