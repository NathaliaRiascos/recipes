import { Link } from 'react-router-dom'
import { Button } from '@/components'
import styles from './Card.module.css'
import { Recipe } from '@/models'

interface Props {
  recipe: Recipe,
  getRecipe?: (recipe: Recipe) => void
}
function Card({ getRecipe, recipe }: Props) {

  return (
    <div className={styles.card}>
      <div className={styles.container__img}>
        <img loading='lazy' src={recipe.strMealThumb} alt="" onClick={() => getRecipe && getRecipe(recipe)} />
      </div>
      <div className={styles.content}>
        <h2>{recipe.strMeal}</h2>
        <Link to={`${recipe.idMeal}`}>
          <Button>Ver más</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
