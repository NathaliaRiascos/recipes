import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../../store'
// import { startLoadingRecipes, setRecipes } from './recipesSlice'


export const getRecipes = createAsyncThunk('recipes/getRecibes', async () => {
  const resp = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=15`)
  const data = await resp.json()
  console.log(data.recipes)
  return data.recipes
})
// export const getRecipes = (category = 'Seafood') => {
//   return async (dispatch: AppDispatch, getState: RootState) => {
//     dispatch(startLoadingRecipes())

//     // TODO: realizar petición https
//     const resp = await fetch('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

//     const data = await resp.json()
//     console.log(data)
//     // dispatch( sePokemons())
//     dispatch(setRecipes({recipes: data}))
//   }
// }