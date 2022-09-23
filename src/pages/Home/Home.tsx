import { useEffect } from 'react'
import styles from './Home.module.css'
import { Search, Slider  } from './components'

import { useAppDispatch } from '@/redux/hooks'

import { getRecipes } from '@/redux/features/'
function Home() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [])
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Find the recipe for your favorite food</h1>
      <Search />
      {/* <Cards /> */}
      <Slider />
    </main>
  )
}

export default Home
