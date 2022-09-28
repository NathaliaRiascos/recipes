import { useState, useEffect, MouseEvent, ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { searchRecipe, getCategories, getRecipes } from '@/redux/features/'

import styles from './Searchbar.module.css'

import { Icon } from '@/components'

function Search(): JSX.Element {
  const { categories } = useAppSelector(state => state.recipes)
  const [toggle, setToggle] = useState(false)
  const [input, setInput] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchRecipe(input))
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(getRecipes(e.target.value))
  }

  return (
    <div
      className={`${styles.search} ${toggle && styles.active}`}
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className={styles.container__icon}>
        <Icon iconName='search' />
      </div>
      <form 
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search your favorite food'
        />
        <select 
          className={styles.combobox}
          name='categories'
          onChange={e => handleChange(e)}
        >
          {
            categories.map(({idCategory, strCategory}) => 
              <option key={idCategory} value={strCategory}>{strCategory}</option>
            )
          }
          
        </select>
      </form>
    </div>
  )
}

export default Search
