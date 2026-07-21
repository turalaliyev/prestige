import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { useInView } from '../hooks/useInView'

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  as?: ElementType
  threshold?: number
}

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as = 'div',
  threshold,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold })

  return createElement(
    as,
    {
      ref,
      className: `reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`.trim(),
      style: { '--reveal-delay': `${delay}ms` } as CSSProperties,
    },
    children,
  )
}
