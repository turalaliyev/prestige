import { services } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { sectionSplit } from './layout'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function ServiceBlock({
  id,
  image,
  dark,
  imageRight,
}: (typeof services)[number]) {
  const { t } = useLanguage()
  const copy = t.services[id]

  return (
    <section className={dark ? 'bg-ink text-white' : 'bg-white text-ink'}>
      <div
        className={`${sectionSplit} py-20 md:py-24 ${
          imageRight ? '' : 'md:[&>div:first-child]:order-2'
        }`}
      >
        <div className="min-w-0">
          <Reveal variant={imageRight ? 'left' : 'right'} delay={80}>
            <SectionLabel invert={!dark}>{copy.label}</SectionLabel>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p
              className={`mt-6 text-base leading-relaxed md:text-lg ${
                dark ? 'text-white/70' : 'text-black/65'
              }`}
            >
              {copy.body}
            </p>
          </Reveal>
        </div>
        <Reveal
          variant={imageRight ? 'right' : 'left'}
          delay={120}
          className="min-w-0 overflow-hidden"
        >
          <img
            src={image}
            alt={copy.label}
            className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  )
}
