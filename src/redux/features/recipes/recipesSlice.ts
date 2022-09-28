import { Category, Recipe } from '@/models/recipe'
import { createSlice,  current, PayloadAction } from '@reduxjs/toolkit'
import { getRecipes, searchRecipe, getCategories, recipeById } from './thunks'

// Define a type for the slice state
interface RecipesState {
  // ingredients: Ingredient[]
  recipes: Recipe[]
  recipe: Recipe | null
  categories: Category[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState:  RecipesState = {
  recipes: [],
  recipe: null,
  categories: [],
  status: 'idle'
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(getRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload
    }),
    builder.addCase(searchRecipe.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload
    }),
    builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    }),
    builder.addCase(recipeById.fulfilled, (state, action: PayloadAction<Recipe>) => {
      state.recipe = action.payload
    })
  }
})

// export const { recipeById } = recipesSlice.actions