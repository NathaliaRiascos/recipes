import { useEffect } from 'react'

import { useAppDispatch } from '@/redux/hooks'
import { getRecipes} from '@/redux/features/'

import styles from './Home.module.css'

import { Search, Slider  } from './components'
function Home() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRecipes('Beef'))
  }, [])
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Find the recipe for your favorite food</h1>
      <Search />
      <Slider />
    </main>
  )
}

export default Home
