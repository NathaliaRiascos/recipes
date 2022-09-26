import { createAsyncThunk } from '@reduxjs/toolkit'

export const getRecipes = createAsyncThunk('recipes/getRecibes', async () => {
  const resp = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=15`)
  const data = await resp.json()
  console.log(data.recipes)
  return data.recipes
})
