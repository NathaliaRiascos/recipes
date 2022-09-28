import {
  createBrowserRouter
} from 'react-router-dom'
import { Home, Recipe } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/recipe/:recipeId',
    element: <Recipe />,
  },
])


export default router