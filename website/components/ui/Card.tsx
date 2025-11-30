import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = hover ? 'card-hover' : 'card'
  const combinedClassName = `${baseStyles} ${className}`.trim()

  return <div className={combinedClassName}>{children}</div>
}
