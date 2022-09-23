import { Ingredient, Recipe } from '@/models/recipe'
import { createSlice } from '@reduxjs/toolkit'
import { getRecipes } from './thunks'

// Define a type for the slice state
interface RecipesState {
  ingredients: Array<Ingredient>
  recipes: Array<Recipe>
  recipe: Recipe | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState = {
  recipes: [],
  recipe: null,
  status: 'idle'
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload
    })
  }
})

// export const { getRecipes } = recipesSlice.actions