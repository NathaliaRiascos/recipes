import { MouseEvent } from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Icon.module.css'

interface Props {
  iconName: IconName,
  onClick?:  (e: MouseEvent<HTMLDivElement>) => void
}

function Icon({iconName, onClick}: Props) {

  return (
    <div 
      className={styles.icon}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={['fas', iconName]} size='lg'/>
    </div>
  )
}

export default Icon
