import React from 'react'
import { Mascarillas } from './Mascarillas'
import { Buzos } from './Buzos'
import { Poleras } from './Poleras'
import { Polos } from './Polos'
import { Tazas } from './Tazas'
import { Layner } from './Layner'
import { Gorras } from './Gorras'
import { CamisasBlusas } from './CamisasBlusas'
import { Chalecos } from './Chalecos'
import { Mousepad } from './Mousepad'

export const Todo = () => {
  return (
    <div>
      <h3>Mascarillas</h3>
      <Mascarillas />
      
      <h3>Buzos</h3>
      <Buzos />

      <h3>Poleras</h3>
      <Poleras />

      <h3>Polos</h3>
      <Polos />

      <h3>Tazas</h3>
      <Tazas />

      <h3>Layner</h3>
      <Layner />
      
      <h3>Gorras</h3>
      <Gorras />
      
      <h3>Camisas y Blusas</h3>
      <CamisasBlusas />
      
      <h3>Chalecos</h3>
      <Chalecos />
      
      <h3>Mousepad</h3>
      <Mousepad />
    </div>
  )
}
