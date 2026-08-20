import { recommendations } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function RecommendationLetters() {
  const { t } = useLanguage()

  return (
    <div className="mt-16 md:mt-24">
      <Reveal variant="up" delay={60}>
        <div className="flex flex-col gap-2 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            {t.partners.docsTitle}
          </h3>
          <p className="max-w-md text-sm text-black/45 md:text-right">
            {t.partners.docsHint}
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:mt-10 md:gap-6 lg:grid-cols-5">
        {recommendations.map((doc, index) => (
          <Reveal key={doc.id} variant="up" delay={120 + index * 70}>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.partners.docsAria} ${doc.org}`}
              className="group block focus:outline-none"
            >
              <div className="relative overflow-hidden bg-mist shadow-[0_2px_18px_rgba(0,0,0,0.08)] ring-1 ring-black/10 transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_44px_rgba(0,0,0,0.18)] group-focus-visible:-translate-y-1.5 group-focus-visible:ring-2 group-focus-visible:ring-prestige-dim">
                <img
                  src={doc.thumb}
                  alt={doc.org}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-2 p-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:text-xs">
                  {t.partners.docsOpen}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 stroke-prestige"
                    fill="none"
                    strokeWidth="2.4"
                    strokeLinecap="square"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <div className="mt-3 flex items-baseline justify-between gap-2">
                <span className="font-display text-sm font-bold uppercase leading-tight tracking-tight md:text-base">
                  {doc.company}
                </span>
                <span className="text-xs tabular-nums text-black/40">
                  {doc.year}
                </span>
              </div>
              <span className="mt-2 block h-[3px] w-0 bg-prestige transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
