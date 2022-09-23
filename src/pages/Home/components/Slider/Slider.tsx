import { useRef } from 'react'
import styles from './Slider.module.css'
import Cards  from '../Cards'
import { Icon } from '@/components'

function Slider() {
  const slider = useRef<HTMLDivElement>(null)

  const scrollTo = (num: number) => {
    if(slider.current)
      slider.current.scrollLeft += num
  }

  const isMaxScroll = () => {
    if(slider.current)
      return slider.current.scrollLeft >= 100
  }

  const isZeroScroll = () => {
    if(slider.current)
      return slider.current.scrollLeft === 0
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.btn__arrow}
        onClick={() => scrollTo(-400)}
        disabled={isZeroScroll()}
      >
        <Icon iconName='arrow-left'/>
      </button>
      <div
        ref={slider}
        className={styles.slide}>
        <Cards />
      </div>   
      <button
        className={styles.btn__arrow}
        onClick={() => scrollTo(400)}
        disabled={isMaxScroll()}
      >
        <Icon iconName='arrow-right'/>
      </button>
    </div>
  )
}

export default Slider