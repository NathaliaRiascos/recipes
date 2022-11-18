import { createAsyncThunk } from '@reduxjs/toolkit'

export const getRecipes = createAsyncThunk('recipes/getRecibes', async (category: string, thunkApi) => {
  try {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const data = await resp.json()
    return data.meals
  } catch (error) {
    return thunkApi.rejectWithValue({ 
      message: 'Failed to fetch todos.'
    })
  }
 
})

export const recipeById = createAsyncThunk('recipes/getRecipeById', async (id: string, thunkApi) => {

  try {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await resp.json()
    const ingredients = []

    // Get ingredients and measures
    // Add ingredients and measures to one array
    const objectRes = data.meals[0]
    const keys  = Object.keys(objectRes)
    for (let i=9; i<= 28; i++) {
      if (objectRes[keys[i]])
        ingredients.push(`${objectRes[keys[i + 20]]} ${objectRes[keys[i]]}`)
    }

    // Add list ingredients to info's recipe
    const newObject = {...objectRes, ingredients}
    return newObject
  } catch (error) {
    return thunkApi.rejectWithValue({ 
      message: 'Failed to fetch todos.'
    })
  }
  
})

export const searchRecipe = createAsyncThunk('recipes/searchRecibe', async (name: string, thunkApi) => {
  try {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const data = await resp.json()
    return data.meals
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.'
    })
  }
  
})

export const getCategories = createAsyncThunk('recipes/getCategories', async (_, thunkApi) => {
  try {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await resp.json()
    return data.categories
  } catch (error) {
    return thunkApi.rejectWithValue({ 
      message: 'Failed to fetch todos.'
    })
  }
})

