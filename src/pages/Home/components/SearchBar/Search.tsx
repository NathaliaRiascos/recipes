import { useState } from 'react'
import styles from './Searchbar.module.css'
import { Icon } from '@/components'

function Search(): JSX.Element {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className={`${styles.search} ${toggle && styles.active}`}
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className={styles.container__icon}>
        <Icon iconName='search' />
      </div>      
      <input
        className={styles.input}
        type='text'
        placeholder='Search your favorite food'
      />
    </div>
  )
}

export default Search
