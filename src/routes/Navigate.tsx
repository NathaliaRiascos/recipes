import {
  createBrowserRouter
} from 'react-router-dom'
import { Home, Recipe } from '../pages'

const router = createBrowserRouter([
  {
    path: '/recipes',
    element: <Home />,
  },
  {
    path: '/recipes/:recipeId',
    element: <Recipe />,
  },
])


export default router