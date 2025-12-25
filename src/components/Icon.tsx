import React from 'react'

interface IconProps {
  name: string
  className?: string
  filled?: boolean
  size?: number | string
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  filled = false,
  size 
}) => {
  const sizeStyle = size ? { fontSize: size } : {}
  return (
    <span 
      className={`material-symbols-outlined ${filled ? 'fill' : ''} ${className}`}
      style={sizeStyle}
    >
      {name}
    </span>
  )
}

