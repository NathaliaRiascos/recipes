import { Recipe } from './recipe'

export interface User {
  id: string
  email: string
  photoProfile: string
  username: string
  favorites: Recipe[]
}