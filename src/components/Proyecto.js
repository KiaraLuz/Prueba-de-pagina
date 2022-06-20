import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from "./data/trabajos";

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    setProyecto(proyecto[0])
    
  }, []);

  return (
    <div className="page page-work">
      <h1 className="heading">{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <p><strong>Tallas: </strong>{proyecto.tallas}</p>
      <p><strong>Colores: </strong> {proyecto.colores}</p>
      <a href={"https://www.facebook.com/carmen.perezquispe.39/photos_by"} target="_blank" rel="noopener noreferrer">Ver más fotos en Facebook</a>
    </div>
  )
}
