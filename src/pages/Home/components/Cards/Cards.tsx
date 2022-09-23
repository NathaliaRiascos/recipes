import { useState } from 'react'
import styles from './Cards.module.css'
import { Card } from '../Card/'
import { Modal } from '@/components' 
import { Recipe } from '@/models'

import { useAppSelector } from '@/redux/hooks'


function Cards() {
  const { recipes } = useAppSelector(state => state.recipes)
  const [recipe, getRecipe] = useState<null | Recipe>(null)
  const [open, toggleOpen] = useState<boolean>(false)

  const handleClickImg = (recipe: Recipe) => {
    toggleOpen(open => !open)
    getRecipe(recipe)
  }
  return (
    <>
      <div className={styles.cards}>
        { 
          recipes?.map((recipe: Recipe) => 
            <Card 
              key={recipe.id}
              recipe={recipe}
              getRecipe={handleClickImg}
            />
          )  
        }
      </div>
      {
        open && 
        <Modal 
          title={recipe?.title}
          toggleOpen={toggleOpen}
        >
          <img src={recipe?.image} />
        </Modal>
      }
    </>
  )
}


export default Cards
