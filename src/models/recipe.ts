export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb?: string
  strCategoryDescription?: string
}

export interface Ingredient {
  name: string
  measure: string
}
export interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strInstructions?: string
  strCategory?: string
  strArea?: string
  strTags?: string
  strYoutube?: string
  ingredients?: Ingredient[]
}
