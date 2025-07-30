import clsx from 'clsx'
import { MouseEvent } from 'react'

interface Props {
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: JSX.Element | JSX.Element[] | string;
}

function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={clsx(
        'bg-primary py-2 px-3 text-white rounded-lg text-base cursor-pointer hover:bg-yellow-600',
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
