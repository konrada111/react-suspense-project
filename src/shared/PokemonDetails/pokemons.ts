import axios from "axios"

export const getPokemons = async () => {
  try {
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")

    return pokemons.data
  } catch (error) {
    console.log(error)
  }
}
