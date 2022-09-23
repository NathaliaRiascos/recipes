import styles from './Modal.module.css'
import { Icon } from '@/components'


type MyCallback = (open: boolean) => boolean;

interface Props {
  title?: string
  toggleOpen: ((ele: MyCallback) => void)
  children: JSX.Element | JSX.Element[]
}

function Modal({children, toggleOpen, title}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h3>{title}</h3>
        </header>
        <button className={styles.btn__close} onClick={() => toggleOpen(open => !open)}>
          <Icon iconName='xmark'/>
        </button>
        <div className={styles.content}>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal