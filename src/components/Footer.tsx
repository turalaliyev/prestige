import { footer, site } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { ContactLineIcon } from './ContactLineIcon'
import { sectionShell } from './layout'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-ink text-white">
      <div className={`${sectionShell} py-14 md:py-20`}>
        <Reveal variant="scale" delay={40}>
          <SectionLabel>{t.footer.label}</SectionLabel>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1.15fr_1px_0.85fr] md:gap-0">
          <div className="md:pr-10">
            <Reveal variant="left" delay={80}>
              <div className="mb-5 flex items-center gap-3">
                <img
                  src={footer.phoneIcon}
                  alt={t.footer.phonesTitle}
                  title={t.footer.phonesTitle}
                  className="h-9 w-9 object-contain"
                />
              </div>
            </Reveal>
            <ul className="space-y-3.5 text-sm md:text-base">
              {footer.phones.map((item, index) => {
                const label = t.footer.phones[index]
                return (
                  <Reveal key={item.icon + index} as="li" variant="up" delay={140 + index * 70}>
                    <div className="flex items-center gap-3">
                      <span title={label} className="inline-flex">
                        <ContactLineIcon type={item.icon} />
                      </span>
                      <a
                        href={`tel:${item.tel}`}
                        className="font-semibold transition hover:text-prestige"
                        title={label}
                      >
                        {item.display}
                      </a>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>

          <div className="hidden bg-white/25 md:block" aria-hidden />

          <Reveal variant="right" delay={160} className="flex flex-col md:pl-10">
            <div className="pb-8">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={footer.mailIcon}
                  alt={t.footer.mailTitle}
                  title={t.footer.mailTitle}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                {footer.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-sm font-semibold transition hover:text-prestige md:text-base"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/25 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={footer.addressIcon}
                  alt={t.footer.addressTitle}
                  title={t.footer.addressTitle}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="max-w-sm text-sm font-semibold leading-relaxed md:text-base">
                {t.footer.address}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="up"
          delay={240}
          className="mt-14 flex flex-col items-center gap-6 border-t border-white/15 pt-8 sm:flex-row sm:justify-between"
        >
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
              target="_blank"
              rel="noopener noreferrer"
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
        </Reveal>

        <Reveal variant="fade" delay={320}>
          <p className="mt-6 text-center text-[11px] tracking-wide text-white/40">
            {footer.copyright}
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
