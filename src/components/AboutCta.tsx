import { about } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { sectionSplit } from './layout'
import { Reveal } from './Reveal'

export function AboutCta() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-white text-ink">
      <div className={`${sectionSplit} py-16 md:items-center md:py-24`}>
        <Reveal variant="left" delay={60} className="min-w-0 overflow-hidden">
          <img
            src={about.image}
            alt="PRESTIGE team"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <div className="flex min-w-0 flex-col justify-center">
          <Reveal variant="scale" delay={80}>
            <img
              src={about.logo}
              alt="PRESTIGE group of companies"
              className="mb-8 h-20 w-auto self-center object-contain md:h-24"
            />
          </Reveal>
          <Reveal variant="up" delay={140}>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={220}>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base md:leading-7">
              {t.about.body}
            </p>
          </Reveal>
          <Reveal variant="right" delay={320} className="self-end">
            <div className="relative mt-10 w-fit max-w-full pb-10 pr-2">
              <div className="bg-black px-6 py-3.5 pr-20 text-sm font-bold uppercase tracking-[0.08em] text-white md:px-8 md:pr-24 md:text-base">
                {t.about.experience}
              </div>
              <img
                src={about.stamp}
                alt=""
                className="pointer-events-none absolute -bottom-1 right-0 h-[4.25rem] w-[4.25rem] object-contain md:h-20 md:w-20"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
