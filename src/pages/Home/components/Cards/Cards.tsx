import styles from './Cards.module.css'
import { Card } from '../Card/'

function Cards() {

  const foods = [
    {
      img: 'food_1.png'
    },
    {
      img: 'food_2.png'
    },
    {
      img: 'food_3.png'
    },
    {
      img: 'food_4.png'
    },
    {
      img: 'food_1.png'
    },
    {
      img: 'food_2.png'
    },
    {
      img: 'food_3.png'
    },
    {
      img: 'food_4.png'
    }
  ]

  return (
    <div className={styles.cards}>
      { 
        foods.map((ele, index) => <Card key={index} img={ele.img}/>)  
      }
    </div>
  )
}


export default Cards
