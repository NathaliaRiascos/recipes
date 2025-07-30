import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'outline'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center rounded-full justify-center px-2 py-1 text-xs font-medium'
  
  const variantClasses = {
    default: 'text-gray-800',
    primary: 'bg-yellow-500 text-white border border-yellow-500',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-primary hover:text-white'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export { Badge }
