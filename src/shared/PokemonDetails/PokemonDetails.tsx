import React, { useEffect } from "react"
import { getPokemons } from "./pokemons"

const PokemonDetails = () => {
  useEffect(() => {
    getPokemons()
  }, [])

  return <div>Bulbasaur</div>
}

export default PokemonDetails
