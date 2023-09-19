/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";


function Pedido({pedidoStatus, setPedidoStatus}) {
  const [pedido, setPedido] = useState('');

  useEffect (() => {

      setTimeout(() => {
          setPedido("Pizzas")
        },2000);
        console.log("O componente foi montado")  

        return () => {
          console.log('Pedido Cancelado');
        }
    }, [pedidoStatus]
  )
  const cancelarPedido = () => {
    setPedidoStatus(false);
    alert("Pedido Cancelado!!")
  }

  return ( 
    <div>
        <h1>{pedido}</h1>
        {pedidoStatus && <button onClick={cancelarPedido}> Cancelar pedido</button>}
    </div>
  
   );
}

export default Pedido;