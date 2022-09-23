import { Button } from '@/components'
import styles from './Card.module.css'

interface Props {
  img: string
}
function Card({ img }: Props) {

  return (
    <div className={styles.card}>
      <div className={styles.container__img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.content}>
        <h2>Food</h2>
        <Button>Ver más</Button>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus possimus, id animi iure, sit ullam inventore rem quibusdam quam dicta consequuntur ea ducimus recusandae minus molestias eum maiores quos.</p>       */}
      </div>
    </div>
  )
}

export default Card
