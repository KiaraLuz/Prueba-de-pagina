import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { Portafolio } from "../components/Portafolio"
import { Servicios } from "../components/Servicios"
import { Curriculum } from "../components/Curriculum"
import { Contacto } from "../components/Contacto"
import { Error } from "../components/Error"
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';
import { Mascarillas } from '../components/productos/Mascarillas';
import { Buzos } from '../components/productos/Buzos';
import { Poleras } from '../components/productos/Poleras';
import { Polos } from '../components/productos/Polos';
import { Todo } from '../components/productos/Todo';
import { Tazas } from '../components/productos/Tazas';
import { Layner } from "../components/productos/Layner";
import { Gorras } from "../components/productos/Gorras";
import { CamisasBlusas } from "../components/productos/CamisasBlusas";
import { Chalecos } from "../components/productos/Chalecos";
import { Mousepad } from "../components/productos/Mousepad";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*HEADER Y NAVEGACION*/}
      <HeaderNav />
      
      {/*CONTENIDO CENTRAL*/}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />}/>
          <Route path="/inicio" element={<Inicio />}/>

          <Route path="/productos/*" element={<Portafolio />}>
            <Route path="" element={<Navigate to="/productos/todo" />}/>
            <Route path="todo" element={<Todo />} />
            <Route path="mascarillas" element={<Mascarillas/>} />
            <Route path="buzos" element={<Buzos />}/>
            <Route path="poleras" element={<Poleras />}/>
            <Route path="polos" element={<Polos />}/>
            <Route path="tazas" element={<Tazas />}/>
            <Route path="layner" element={<Layner />}/>
            <Route path="gorras" element={<Gorras />}/>
            <Route path="camisas-blusas" element={<CamisasBlusas />}/>
            <Route path="chalecos" element={<Chalecos />}/>
            <Route path="mousepad" element={<Mousepad />}/>
          </Route>


          <Route path="/servicios" element={<Servicios />}/>
          <Route path="/curriculum" element={<Curriculum />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/proyecto/:id" element={<Proyecto />}/>
          <Route path="*" element={<Error />}/>

        </Routes>
      </section>

      {/*FOOTER*/}
      <Footer />
    </BrowserRouter>
  )
}
