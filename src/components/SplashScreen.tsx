import { useEffect, useState } from 'react'
import {
  about,
  footer,
  heroImage,
  heroLogo,
  introSlides,
  partners,
  portfolio,
  services,
} from '../data/content'

const SPLASH_MS = 3000

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

function preloadImages(sources: string[]) {
  return Promise.all(sources.map(preloadImage))
}

const criticalImages = [
  heroImage,
  heroLogo,
  ...introSlides.map((slide) => slide.image),
  ...portfolio.map((item) => item.src),
  ...services.map((service) => service.image),
  partners.image,
  about.image,
  about.logo,
  about.stamp,
  footer.logo,
]

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let cancelled = false
    void preloadImages(criticalImages)

    const leaveTimer = window.setTimeout(() => {
      if (cancelled) return
      setLeaving(true)
    }, SPLASH_MS)

    const doneTimer = window.setTimeout(() => {
      if (!cancelled) onDone()
    }, SPLASH_MS + 700)

    return () => {
      cancelled = true
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black ${
        leaving ? 'animate-splash-out' : ''
      }`}
      aria-hidden={leaving}
    >
      <img
        src={footer.logo}
        alt="PRESTIGE"
        className="animate-splash-logo h-16 w-auto object-contain md:h-24"
      />
    </div>
  )
}
