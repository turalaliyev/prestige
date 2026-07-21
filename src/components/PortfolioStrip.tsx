import { portfolio } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

const offsets = [
  'md:-translate-y-12',
  '',
  'md:translate-y-12',
  '',
  'md:-translate-y-12',
  '',
  'md:translate-y-12',
  '',
  'md:-translate-y-12',
]

export function PortfolioStrip() {
  const { t } = useLanguage()
  const loop = [...portfolio, ...portfolio]

  return (
    <section id="work" className="overflow-hidden bg-mist text-ink">
      <Reveal variant="fade" className="py-16 md:py-28" threshold={0.12}>
        <div className="portfolio-marquee flex w-max animate-marquee-right items-center gap-4 md:gap-6">
          {loop.map((item, index) => {
            const sourceIndex = index % portfolio.length
            return (
              <article
                key={`${item.id}-${index}`}
                className={`group w-[42vw] shrink-0 overflow-hidden bg-black/5 sm:w-[28vw] md:w-[14vw] md:min-w-[180px] ${
                  offsets[sourceIndex] ?? ''
                }`}
              >
                <img
                  src={item.src}
                  alt={t.portfolioAlts[sourceIndex]}
                  className="aspect-[3/5] w-full object-cover transition duration-500 group-hover:scale-105 md:min-h-[320px]"
                  draggable={false}
                />
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
