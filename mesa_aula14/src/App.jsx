import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [pokemonStatus, setPokemonStatus] = useState([])
  
  useEffect(() => {
    async function carregaPokemon() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon'
      )
      const pokemonData = await response.json();
      setPokemonStatus(pokemonData.results);
    }
    carregaPokemon();
  }, [])

  return (
    <>  
    {pokemonStatus && (
      pokemonStatus.map((pokemon, index) => {
        const pokemonNome = pokemon.name.toUpperCase();
        return(
          <div className='poke' key={index}>
            <h2>Nome: <br />{pokemonNome}</h2>
              <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={`Imagem de ${pokemon.name}`}
                /> 
          </div>
        )
      } )
    )}
  </>
  )
}

