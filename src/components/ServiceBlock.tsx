import { services } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { ImageSlider, type Slide } from './ImageSlider'
import { sectionSplit } from './layout'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

type ServiceBlockProps = (typeof services)[number] & {
  image?: string
  slides?: Slide[]
}

export function ServiceBlock({
  id,
  image,
  slides,
  dark,
  imageRight,
}: ServiceBlockProps) {
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
          className="group min-w-0 overflow-hidden"
        >
          {slides && slides.length > 0 ? (
            <ImageSlider slides={slides} alt={copy.label} />
          ) : (
            image && (
              <img
                src={image}
                alt={copy.label}
                className="slider-zoom aspect-[5/4] w-full object-cover"
              />
            )
          )}
        </Reveal>
      </div>
    </section>
  )
}
