import { Button } from '@/components'
import styles from './Card.module.css'
import { Recipe } from '@/models'

interface Props {
  recipe: Recipe,
  getRecipe?: (recipe: Recipe) => void
}
function Card({ getRecipe, recipe }: Props) {

  return (
    <>
      {
        recipe.image ?
          <div className={styles.card}>
            <div className={styles.container__img}>
              <img src={recipe.image} alt="" onClick={() => getRecipe && getRecipe(recipe)} />
            </div>
            <div className={styles.content}>
              <h2>{recipe.title}</h2>
              <Button>Ver más</Button>
            </div>
          </div>
          : null
      }
    </>
  )
}

export default Card
