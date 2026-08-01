import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Hero from '../Hero/Hero'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Marquee from '../Marquee/Marquee'
import Work from '../Work/Work'
import Skill from '../Skill/Skill'
import Certifications from '../Certifications/Certifications'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const NAV_OFFSET = 80

function scrollToSection(id) {
  if (!id || id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

function Main() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const section = pathname.replace(/^\/+|\/+$/g, '') || 'hero'
    const frame = requestAnimationFrame(() => scrollToSection(section))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div className="mx-auto max-w-6xl">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Marquee />
      <section id="work">
        <Work />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="certs">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Main
