import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import profile from '../../assets/profile/profile.jpg'
import Magnetic from '../Magnetic/Magnetic'

const resumeUrl =
  'https://drive.google.com/file/d/1nZ89_UehJXXUPj760qUG7vAM3zXxdz73/view?usp=sharing'

function splitLetters(text, baseDelay = 0) {
  return text.split('').map((char, i) => (
    <span
      key={`${text}-${i}`}
      className="letter"
      style={{ animationDelay: `${baseDelay + i * 0.045}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

function Hero() {
  const navigate = useNavigate()
  const visualRef = useRef(null)

  useEffect(() => {
    const el = visualRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (event) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth - 0.5) * 16
      const y = (event.clientY / innerHeight - 0.5) * 12
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.04)`
    }

    const onLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0) scale(1)'
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center overflow-hidden py-10 lg:py-0">
      <span className="hero-frame tl" aria-hidden="true" />
      <span className="hero-frame tr md:hidden" aria-hidden="true" />
      <span className="hero-frame bl" aria-hidden="true" />
      <span className="hero-frame br md:hidden" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden md:w-[54%]">
        <div ref={visualRef} className="hero-visual h-full w-full">
          <img
            src={profile}
            alt=""
            className="animate-fade h-full w-full object-cover object-[center_15%] opacity-90 delay-2 md:opacity-100"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/75 to-transparent md:via-paper/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/40 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="animate-rise mb-4 text-sm font-medium tracking-wide text-signal">
          Available for roles · Full-stack
        </p>
        <h1 className="font-display text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.9] font-extrabold tracking-tight text-ink">
          {splitLetters('Atharva', 0.05)}
          <span className="block text-[0.72em] text-ink/80">
            {splitLetters('Singh', 0.35)}
          </span>
        </h1>

        <p className="animate-rise delay-2 mt-6 max-w-lg font-display text-xl font-semibold tracking-tight text-signal sm:text-2xl md:text-3xl">
          I build things for the web.
        </p>

        <p className="animate-rise delay-3 mt-4 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
          CS undergrad &amp; Junior HTML Developer — React, Node, MongoDB, and
          accessible interfaces. 450+ problems solved.
        </p>

        <div className="animate-rise delay-4 mt-9 flex flex-wrap items-center gap-4">
          <Magnetic
            type="button"
            onClick={() => navigate('/work')}
            className="bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-mist"
          >
            View work
          </Magnetic>
          <Magnetic
            as="a"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/25 px-6 py-3 text-sm font-semibold tracking-wide text-ink hover:border-signal hover:text-signal"
          >
            Resume
          </Magnetic>
        </div>
      </div>

      <div className="scroll-cue absolute bottom-6 left-0 hidden items-center gap-3 text-xs tracking-[0.2em] text-ink-soft uppercase md:flex">
        <span className="h-px w-10 bg-ink/30" />
        Scroll
      </div>
    </section>
  )
}

export default Hero
