
import { useEffect, useState } from 'react'
import './App.css'
import ContadorDeCliques from './ContadorDeCliques'

function App() {
  const [checkbox, setCheckbox] = useState(false);

  useEffect(
    () => {
      console.log("<App/> Foi Montado")

      return function limpaComponente() {
        console.log("<App/> Foi Desmontado/Limpo")
      }
    },[] 
    )
    
// se retirar esta parte após a vírgura e o [] que esta fazendo o efeito ser chamado só uma vez, o efeito será executado todas as vezes
  return (
    <>
    <h2>Ciclo de Vida (Hook: useEffect())</h2>

    <input type="checkbox" 
    value={checkbox}
    onChange={() => setCheckbox(!checkbox)}
    />
    <label>Exibir contador de cliques</label>

    {
      checkbox ?   <ContadorDeCliques /> : <> </>
    }
  
    </>
  )
}

export default App
