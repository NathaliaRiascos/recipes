import { createAsyncThunk } from '@reduxjs/toolkit'
import { Category, Recipe } from '@/models/recipe'

export const getRecipes = createAsyncThunk('recipes/getRecibes', async (category: string) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  const data = await resp.json()
  console.log(data.meals, category, typeof category)
  return data.meals as Recipe[]
})

export const recipeById = createAsyncThunk('recipes/getRecipeById',async (id: string) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await resp.json()
  const ingredients = []

  const objectRes = data.meals[0]
  const keys  = Object.keys(objectRes)
  for (let i=9; i<= 28; i++) {
    if (objectRes[keys[i]])
      ingredients.push(`${objectRes[keys[i + 20]]} ${objectRes[keys[i]]}`)
  }
  const newObject = {...objectRes, ingredients}
  console.log(newObject)
  return newObject as Recipe
})

export const searchRecipe = createAsyncThunk('recipes/searchRecibe', async (name: string) => {
  const resp = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  const data = await resp.json()
  return data.results as Recipe[]
})

export const getCategories = createAsyncThunk('recipes/getCategories', async () => {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  const data = await resp.json()
  return data.categories as Category[]
})

