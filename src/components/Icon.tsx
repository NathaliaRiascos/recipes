import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  name: IconName;
  className?: string
}

function Icon({ name, className  }: Props) {
  return <FontAwesomeIcon icon={['fas', name]} size="sm" className={className} />
}

export default Icon
