import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { languages, type Lang } from '../i18n/translations'

export function LanguageSelect() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const current = languages.find((item) => item.code === lang)?.label ?? 'EN'

  const choose = (code: Lang) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="absolute right-5 top-5 z-30 md:right-10 md:top-8">
      <button
        type="button"
        aria-label={t.changeLanguage}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex flex-col items-center gap-0.5 text-black"
      >
        <span className="font-inter text-sm font-black leading-none tracking-wide md:text-base">
          {current}
        </span>
        <svg
          viewBox="0 0 12 8"
          className={`h-2 w-3 transition ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M1 1.5L6 6.5L11 1.5" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.changeLanguage}
          className="absolute right-0 top-full mt-2 min-w-[3.25rem] overflow-hidden border border-black/10 bg-white shadow-lg"
        >
          {languages.map((item) => (
            <li key={item.code} role="option" aria-selected={item.code === lang}>
              <button
                type="button"
                onClick={() => choose(item.code)}
                className={`block w-full px-3 py-2 text-center font-inter text-sm font-black tracking-wide transition hover:bg-black hover:text-white ${
                  item.code === lang ? 'bg-black text-white' : 'text-black'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
