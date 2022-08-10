import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import { counterSlice, pokemonSlice } from './slices'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})