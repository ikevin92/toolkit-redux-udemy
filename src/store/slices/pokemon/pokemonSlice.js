import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    starLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
      state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { starLoadingPokemons, setPokemons } = pokemonSlice.actions