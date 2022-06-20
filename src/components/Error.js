import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="page">
        <h1 className="heading">Error 404</h1>
        <strong>Esta página no existe</strong>
        <br />
        <a><Link to="/inicio">Volver al inicio</Link></a>
    </div>
  )
}
