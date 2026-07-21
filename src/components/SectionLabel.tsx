import type { ReactNode } from 'react'

export function SectionLabel({
  children,
  invert = false,
}: {
  children: ReactNode
  invert?: boolean
}) {
  return (
    <span
      className={`mb-6 inline-block px-6 py-2.5 text-base font-semibold md:px-7 md:py-3 md:text-lg ${
        invert ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {children}
    </span>
  )
}
