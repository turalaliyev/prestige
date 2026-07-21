export function ContactLineIcon({ type }: { type: string }) {
  const common = 'h-5 w-5 shrink-0 text-prestige'
  switch (type) {
    case 'napkins':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 7h16v12H4zM4 7l4-3h8l4 3M8 11h8M8 15h5" />
        </svg>
      )
    case 'packaging':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M3 8l9-4 9 4-9 4-9-4zM3 8v8l9 4 9-4V8M12 12v8" />
        </svg>
      )
    case 'print':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M6 9V3h12v6M6 17H4a1 1 0 01-1-1v-5a2 2 0 012-2h14a2 2 0 012 2v5a1 1 0 01-1 1h-2M6 14h12v7H6z" />
        </svg>
      )
    case 'construction':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 20h16M6 20V10l6-4 6 4v10M10 20v-4h4v4" />
        </svg>
      )
    case 'gift':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 12h16v9H4zM2 8h20v4H2zM12 8v13M12 8c-2-3-5-3-5-1s2 2 5 1c3 1 5 0 5-1s-3 0-5 1z" />
        </svg>
      )
    case 'vinyl':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M3 16l5-5 4 3 4-6 5 8H3zM8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    case 'wideformat':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M4 5h16v14H4zM8 9h8M8 12h8M8 15h5" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}
