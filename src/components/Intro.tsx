import { useEffect, useState } from 'react'
import { introSlides } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { sectionShell, sectionSplit } from './layout'
import { SectionLabel } from './SectionLabel'

export function Intro() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const total = introSlides.length
  const slide = introSlides[active]
  const copy = t.intro.slides[slide.id]

  const goTo = (index: number) => {
    setActive((index + total) % total)
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, 12000)
    return () => window.clearInterval(id)
  }, [active, total])

  return (
    <section id="intro" className="bg-ink text-white">
      <div className={`${sectionSplit} py-16 md:py-24`}>
        <div key={slide.id + copy.title} className="animate-rise min-w-0">
          <SectionLabel>{t.intro.label}</SectionLabel>
          <h2 className="block w-fit border-b border-white pb-2 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl lg:text-[1.65rem]">
            {copy.title}
          </h2>
          {copy.subtitle ? (
            <p className="mt-4 text-sm italic leading-relaxed text-white md:text-base">
              {copy.subtitle}
            </p>
          ) : null}
          <p className="mt-4 text-xs leading-relaxed text-white/80 md:text-sm">
            {copy.body}
          </p>
          <p className="mt-8 text-[11px] font-semibold leading-relaxed md:text-xs">
            {t.intro.contactPrefix}{' '}
            <a
              href={`tel:${slide.phone}`}
              className="whitespace-nowrap underline decoration-white/40 underline-offset-4 transition hover:text-prestige hover:decoration-prestige"
            >
              {slide.contact}
            </a>
          </p>
        </div>

        <div className="relative min-w-0 overflow-hidden">
          {introSlides.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={t.intro.slides[item.id].title}
              loading="eager"
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'low'}
              className={`aspect-[4/3] w-full object-cover transition-opacity duration-500 ${
                index === active
                  ? 'relative opacity-100'
                  : 'pointer-events-none absolute inset-0 opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className={`${sectionShell} flex items-center justify-center gap-5 pb-10 md:pb-14`}>
        <button
          type="button"
          aria-label={t.intro.prev}
          onClick={() => goTo(active - 1)}
          className="flex h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          <span className="sr-only">{t.intro.prev}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          {introSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${t.intro.slideLabel} ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === active ? 'bg-white' : 'bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label={t.intro.next}
          onClick={() => goTo(active + 1)}
          className="flex h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          <span className="sr-only">{t.intro.next}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
