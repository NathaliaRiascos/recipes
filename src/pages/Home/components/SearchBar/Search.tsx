import { useState } from 'react'
import styles from './Searchbar.module.css'
import { Icon } from '@/components'

function Search(): JSX.Element {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div
      className={`${styles.search} ${toggle && styles.active}`}
    >
      <Icon iconName='search' onClick={handleClick} />
      <input
        className={styles.input}
        type='text'
        placeholder='Search your favorite food'
      />
      <select name='select' className={styles.combobox}>
        <option value='value1'>Value 1</option>
        <option value='value2' selected>Value 2</option>
        <option value='value3'>Value 3</option>
      </select>
    </div>
  )
}

export default Search
