/* eslint-disable no-undef */

import  Pedido  from './Pedido';
import './App.css'
import { useState } from 'react'

function App() {
  const [pedidoStatus, setPedidoStatus] = useState(true);
   
  return (
    <>
    <h1>Seu pedido:</h1>
    {pedidoStatus ? (
      <div>
        <Pedido pedidoStatus={pedidoStatus} setPedidoStatus={setPedidoStatus} />
        
      </div>
    ) : (
      <p>Pedido cancelado</p>
    )}
  </>
  )
}

export default App
