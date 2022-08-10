import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemons, starLoadingPokemons } from './pokemonSlice'


export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(starLoadingPokemons())

    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${ page }&limit=20`)
    // console.log(`🚀 ~ file: thunks.js ~ line 9 ~ return ~ response`, response);

    // const data = await response.json()
    // console.log(`🚀 ~ file: thunks.js ~ line 11 ~ return ~ data`, data);
    const { data } = await pokemonApi.get(`/pokemon?offset=${ page * 10 }&limit=20`)

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}