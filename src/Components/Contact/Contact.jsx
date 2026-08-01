import { useReveal } from '../../hooks/useReveal'
import Magnetic from '../Magnetic/Magnetic'
import AvailabilityBadge from '../AvailabilityBadge/AvailabilityBadge'

function Contact() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="stagger scroll-mt-24 flex flex-col items-center py-24 text-center md:py-32"
    >
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
        06 — Contact
      </p>

      <AvailabilityBadge className="mt-6" />

      <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
        Let&apos;s build something
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
        Looking for a full-time software / full-stack role where I can ship,
        learn, and grow. Based in Uttar Pradesh — open to remote or on-site.
        Click the status above to browse roles I&apos;m targeting.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-ink-soft">
        <a
          href="mailto:atharvasingh0072@gmail.com"
          className="transition-colors hover:text-signal"
        >
          atharvasingh0072@gmail.com
        </a>
        <span className="hidden text-ink/20 sm:inline">·</span>
        <a href="tel:+917880479526" className="transition-colors hover:text-signal">
          +91 7880479526
        </a>
      </div>

      <Magnetic
        as="a"
        href="mailto:atharvasingh0072@gmail.com?subject=Full-time%20role%20opportunity"
        className="mt-8 bg-signal px-8 py-3.5 text-base font-semibold text-mist"
        strength={0.4}
      >
        Email about a role
      </Magnetic>
    </section>
  )
}

export default Contact
