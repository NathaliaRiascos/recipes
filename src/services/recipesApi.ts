// services/recipesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Recipe } from '@/models/recipe'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getRecipeById: builder.query<Recipe, string>({
      query: (id) => `lookup.php?i=${id}`,
      transformResponse: (response: any) => {
        const recipe = response.meals?.[0]
        if (!recipe) throw new Error('No se encontró la receta')

        const ingredients = []
        for (let i = 1; i <= 20; i++) {
          const ingredient = recipe[`strIngredient${i}`]
          const measure = recipe[`strMeasure${i}`]
          if (ingredient && ingredient.trim()) {
            ingredients.push({ name: ingredient, measure })
          }
        }

        return { ...recipe, ingredients }
      }
    }),

    searchRecipes: builder.query<Recipe[], string>({
      query: (name) => `search.php?s=${name}`,
      transformResponse: (response: any) => {
        if (!response.meals) throw new Error('No se encontraron recetas.')
        return response.meals
      }
    })
  })
})

export const { useGetRecipeByIdQuery, useSearchRecipesQuery,  useLazySearchRecipesQuery } = recipesApi
