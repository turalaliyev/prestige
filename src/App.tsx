import { useCallback, useState } from 'react'
import { services } from './data/content'
import { AboutCta } from './components/AboutCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Partners } from './components/Partners'
import { PortfolioStrip } from './components/PortfolioStrip'
import { ServiceBlock } from './components/ServiceBlock'
import { SplashScreen } from './components/SplashScreen'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const hideSplash = useCallback(() => setShowSplash(false), [])

  return (
    <div id="top" className="min-h-screen bg-black">
      {showSplash && <SplashScreen onDone={hideSplash} />}
      <Hero ready={!showSplash} />
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
