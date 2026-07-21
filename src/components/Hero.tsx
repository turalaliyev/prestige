import { heroImage, heroLogo } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSelect } from './LanguageSelect'

export function Hero({ ready = true }: { ready?: boolean }) {
  const { t } = useLanguage()

  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[2.4s] ease-out ${
          ready ? 'scale-100' : 'scale-110'
        }`}
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <a
          href="#top"
          className={`absolute left-5 top-5 z-20 md:left-10 md:top-8 ${
            ready ? 'animate-rise' : 'opacity-0'
          }`}
        >
          <img
            src={heroLogo}
            alt="PRESTIGE group of companies"
            className="h-12 w-auto object-contain drop-shadow md:h-12"
          />
        </a>

        <div className={ready ? 'animate-rise delay-1' : 'opacity-0'}>
          <LanguageSelect />
        </div>

        <div
          className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-8 md:right-8 md:flex lg:right-12"
          aria-hidden
        >
          {t.heroSideWords.map((word, index) => (
            <span
              key={word}
              className={ready ? 'animate-rise' : 'opacity-0'}
              style={{ animationDelay: ready ? `${0.35 + index * 0.12}s` : undefined }}
            >
              <span
                className="font-inter text-[11px] font-black uppercase tracking-[0.35em] text-white/85 drop-shadow lg:text-xs"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>

        <div className="flex flex-1" aria-hidden />

        <div className="flex justify-center gap-6 pb-8 md:hidden">
          {t.heroSideWords.map((word, index) => (
            <span
              key={word}
              className={`font-inter text-[10px] font-black uppercase tracking-[0.2em] text-white/80 ${
                ready ? 'animate-rise' : 'opacity-0'
              }`}
              style={{ animationDelay: ready ? `${0.35 + index * 0.1}s` : undefined }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
