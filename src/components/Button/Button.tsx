import { MouseEvent } from 'react'
import styles from './Button.module.css'

interface Props {
  onClick?:  (e: MouseEvent<HTMLButtonElement>) => void
  children?: JSX.Element | JSX.Element[] | string
}

function Button({children, onClick}: Props) {

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type='button'
    >
      { children }
    </button>
  )
}

export default Button