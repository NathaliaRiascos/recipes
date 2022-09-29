import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { recipeById } from '@/redux/features/'

import styles from './Recipe.module.css'

function Recipe() {
  const { recipeId } = useParams()
  const { recipe } = useAppSelector(state => state.recipes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(recipeById(recipeId))
  }, [recipeId])

  const getIdVideo = () => {
    const index = recipe?.strYoutube?.indexOf('=')  && recipe?.strYoutube?.indexOf('=') + 1
    return recipe?.strYoutube?.slice(index)
  }


  return (
    <div className={styles.container}>
      <h2>{recipe?.strMeal}</h2>
      <p>Category: {recipe?.strCategory}</p>
      <div className={styles.container__img}>
        <img
          loading='lazy'
          className={styles.img}
          src={recipe?.strMealThumb}
          alt={`image of ${recipe?.strMeal}`}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.container__ingredients}>
          <h3>Ingredients</h3>
          <ul className={styles.content__ingredients}>
            {recipe?.ingredients?.map((ingredient, index) =>
              <li key={index}>{ingredient}</li>
            )}
          </ul>
        </div>
        <div className={styles.container__instructions}>
          <h3>Instructions</h3>
          <p className={styles.content__instructions}>{recipe?.strInstructions}</p>
        </div>
      </div>
      {recipe?.strYoutube &&
        <iframe
          name={`video's recipe ${recipe?.strMeal}`}
          className={styles.video}
          src={`https://www.youtube.com/embed/${getIdVideo()}`}>
        </iframe>}
    </div>

  )
}

export default Recipe