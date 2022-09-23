import styles from './Home.module.css'
import { Search, Cards  } from './components'

function Home() {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Find the recipe for your favorite food</h1>
      <Search />
      <Cards />
    </main>
  )
}

export default Home
