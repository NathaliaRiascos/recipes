export interface Category {
  idCategory: string
  strCategory: string
}

export interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strInstructions?: string
  strCategory?: string
  strYoutube?: string
  ingredients?: string[]
  measures?: string[]
}
