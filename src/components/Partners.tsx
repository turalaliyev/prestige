import { partners } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { sectionShell } from './layout'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Partners() {
  const { t } = useLanguage()

  return (
    <section className="bg-white text-ink">
      <div className={`${sectionShell} py-16 md:py-24`}>
        <Reveal variant="scale" delay={40}>
          <SectionLabel invert>{t.partners.label}</SectionLabel>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
          <Reveal variant="left" delay={100} className="min-w-0 overflow-hidden">
            <img
              src={partners.image}
              alt={t.partners.label}
              className="w-full object-contain"
            />
          </Reveal>
          <Reveal variant="right" delay={180}>
            <p className="text-sm leading-relaxed text-black/55 md:pt-2 md:text-base md:leading-7">
              {t.partners.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
