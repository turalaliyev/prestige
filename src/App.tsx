import { useEffect, useState, type ReactNode } from 'react'
import {
  about,
  footer,
  heroImage,
  heroLogo,
  introSlides,
  partners,
  portfolio,
  services,
  site,
} from './data/content'

const sectionShell = 'mx-auto max-w-7xl px-6 md:px-10 lg:px-14'
const sectionSplit = `${sectionShell} grid gap-10 md:grid-cols-2 md:items-center md:gap-12`

function SectionLabel({
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

function Hero() {
  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <a href="#top" className="absolute left-5 top-5 z-20 md:left-10 md:top-8">
          <img
            src={heroLogo}
            alt="PRESTIGE group of companies"
            className="h-12 w-auto object-contain drop-shadow md:h-12"
          />
        </a>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-48 text-center">
          <div className="animate-rise delay-2 mx-auto w-full max-w-[500px] text-center">
            <p className="font-inter text-[32px] font-black leading-none tracking-normal text-white drop-shadow">
              {site.heroLine}
            </p>
            <p className="animate-rise delay-3 mt-4 font-inter text-[15px] font-normal leading-none tracking-normal text-white/90">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Intro() {
  const [active, setActive] = useState(0)
  const slide = introSlides[active]
  const total = introSlides.length

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
        <div key={slide.title} className="animate-rise min-w-0">
          <div className="block">
            <SectionLabel>{slide.label}</SectionLabel>
          </div>
          <h2 className="block w-fit border-b border-white pb-2 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl lg:text-[1.65rem]">
            {slide.title}
          </h2>
          <p className="mt-4 text-sm italic leading-relaxed text-white md:text-base">
            {slide.subtitle}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/80 md:text-sm">
            {slide.body}
          </p>
          <p className="mt-8 text-[11px] font-semibold leading-relaxed md:text-xs">
            По вопросам широкоформатной печати звоните по номеру{' '}
            <a
              href={`tel:${slide.phone}`}
              className="whitespace-nowrap underline decoration-white/40 underline-offset-4 transition hover:text-prestige hover:decoration-prestige"
            >
              {slide.contact}
            </a>
          </p>
        </div>
        <div className="min-w-0 overflow-hidden">
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className="aspect-[4/3] w-full object-cover transition duration-700"
          />
        </div>
      </div>

      <div
        className={`${sectionShell} flex items-center justify-center gap-5 pb-10 md:pb-14`}
      >
        <button
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => goTo(active - 1)}
          className="flex h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          <span className="sr-only">Prev</span>
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
              key={item.title}
              type="button"
              aria-label={`Слайд ${index + 1}`}
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
          aria-label="Следующий слайд"
          onClick={() => goTo(active + 1)}
          className="flex h-9 w-9 items-center justify-center border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          <span className="sr-only">Next</span>
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

function PortfolioStrip() {
  const offsets = [
    'md:-translate-y-12',
    '',
    'md:translate-y-12',
    '',
    'md:-translate-y-12',
    '',
  ]

  return (
    <section id="work" className="bg-mist text-ink">
      <div className="mx-auto max-w-[1600px] px-3 py-16 md:px-4 md:py-28">
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
          {portfolio.map((item, index) => (
            <article
              key={item.alt}
              className={`group overflow-hidden bg-black/5 transition-transform duration-500 ${offsets[index] ?? ''}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[3/5] w-full object-cover transition duration-500 group-hover:scale-105 md:min-h-[320px]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceBlock({
  label,
  // title,
  body,
  image,
  dark,
  imageRight,
}: (typeof services)[number]) {
  return (
    <section
      id={imageRight ? undefined : undefined}
      className={dark ? 'bg-ink text-white' : 'bg-white text-ink'}
    >
      <div
        className={`${sectionSplit} py-20 md:py-24 ${
          imageRight ? '' : 'md:[&>div:first-child]:order-2'
        }`}
      >
        <div className="min-w-0">
          <SectionLabel invert={!dark}>{label}</SectionLabel>
          {/* <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {title}
          </h2> */}
          <p
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              dark ? 'text-white/70' : 'text-black/65'
            }`}
          >
            {body}
          </p>
        </div>
        <div className="min-w-0 overflow-hidden">
          <img
            src={image}
            alt={label}
            className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="bg-white text-ink">
      <div className={`${sectionShell} py-16 md:py-24`}>
        <SectionLabel invert>{partners.label}</SectionLabel>
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
          <div className="min-w-0 overflow-hidden">
            <img
              src={partners.image}
              alt={partners.label}
              className="w-full object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-black/55 md:pt-2 md:text-base md:leading-7">
            {partners.body}
          </p>
        </div>
      </div>
    </section>
  )
}

function AboutCta() {
  return (
    <section id="about" className="bg-white text-ink">
      <div className={`${sectionSplit} py-16 md:items-center md:py-24`}>
        <div className="min-w-0 overflow-hidden">
          <img
            src={about.image}
            alt="PRESTIGE team"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center">
          <img
            src={about.logo}
            alt="PRESTIGE group of companies"
            className="mb-8 h-20 w-auto self-center object-contain md:h-24"
          />
          <h2 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {about.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base md:leading-7">
            {about.body}
          </p>
          <div className="relative mt-10 w-fit max-w-full self-end pb-10 pr-2">
            <div className="bg-black px-6 py-3.5 pr-20 text-sm font-bold uppercase tracking-[0.08em] text-white md:px-8 md:pr-24 md:text-base">
              {about.experience}
            </div>
            <img
              src={about.stamp}
              alt=""
              className="pointer-events-none absolute -bottom-1 right-0 h-[4.25rem] w-[4.25rem] object-contain md:h-20 md:w-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className={`${sectionShell} py-14 md:py-20`}>
        <SectionLabel>{footer.label}</SectionLabel>

        <div className="grid gap-10 md:grid-cols-[1.15fr_1px_0.85fr] md:gap-0">
          <div className="md:pr-10">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={footer.phoneIcon}
                alt=""
                className="h-9 w-9 object-contain"
              />
              <h3 className="font-display text-lg font-bold md:text-xl">
                {footer.phonesTitle}
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm md:text-base">
              {footer.phones.map((item) => (
                <li key={item.label} className="flex flex-wrap gap-x-2">
                  <span className="text-white/85">{item.label}:</span>
                  <a
                    href={`tel:${item.tel}`}
                    className="font-semibold transition hover:text-prestige"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden bg-white/25 md:block" aria-hidden />

          <div className="flex flex-col md:pl-10">
            <div className="pb-8">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={footer.mailIcon}
                  alt=""
                  className="h-10 w-10 object-contain"
                />
                <h3 className="font-display text-lg font-bold md:text-xl">
                  {footer.mailTitle}
                </h3>
              </div>
              <a
                href={`mailto:${footer.email}`}
                className="text-sm font-semibold transition hover:text-prestige md:text-base"
              >
                {footer.email}
              </a>
            </div>

            <div className="border-t border-white/25 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={footer.addressIcon}
                  alt=""
                  className="w-auto object-contain h-10"
                />
                <h3 className="font-display text-lg font-bold md:text-xl">
                  {footer.addressTitle}
                </h3>
              </div>
              <p className="max-w-sm text-sm font-semibold leading-relaxed md:text-base">
                {footer.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/15 pt-8 sm:flex-row sm:justify-between">
          <img
            src={footer.logo}
            alt="PRESTIGE group of companies"
            className="h-12 w-auto object-contain md:h-14"
          />
          <div className="flex items-center gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded bg-[#1877F2] text-white transition hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white transition hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zm-5 3.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5zm0 2A1.5 1.5 0 1013.5 12 1.5 1.5 0 0012 10.5zM17.5 7.75a.75.75 0 11-.75.75.75.75 0 01.75-.75z" />
              </svg>
            </a>
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded bg-[#0A66C2] text-white transition hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M6.5 9H3v12h3.5V9zM4.75 3A2.05 2.05 0 002.7 5.1 2.05 2.05 0 004.75 7.2 2.05 2.05 0 006.8 5.1 2.05 2.05 0 004.75 3zM21 13.3c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 00-3 1.6V9H10.8v12H14.3v-6.5c0-1.7.3-3.4 2.5-3.4s2.2 1.9 2.2 3.5V21H22v-7.7z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] tracking-wide text-white/40">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black">
      <Hero />
      <Intro />
      <PortfolioStrip />
      <div id="services">
        {services.map((service) => (
          <ServiceBlock key={service.id} {...service} />
        ))}
      </div>
      <Partners />
      <AboutCta />
      <Footer />
    </div>
  )
}
