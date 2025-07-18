import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg transition-shadow duration-300'
  const hoverClasses = hover ? 'hover:shadow-xl' : ''
  
  const classes = [
    baseClasses,
    hoverClasses,
    padding,
    className
  ].join(' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card