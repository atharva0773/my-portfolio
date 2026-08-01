import profile from '../../assets/profile/profile.jpg'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'

const stack = [
  'JavaScript',
  'React.js',
  'Node.js',
  'MongoDB',
  'C++',
  'Java',
]

function Stat({ value, suffix = '', label, decimals = 0 }) {
  const target = decimals ? value * 10 ** decimals : value
  const { ref, value: n } = useCountUp(target)
  const display = decimals ? (n / 10 ** decimals).toFixed(decimals) : n

  return (
    <div ref={ref} className="stat-chip border-t border-ink/10 pt-3">
      <p className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-xs tracking-[0.16em] text-ink-soft uppercase">
        {label}
      </p>
    </div>
  )
}

function About() {
  const ref = useReveal()
  const textRef = useReveal()
  const photoRef = useReveal()
  const statsRef = useReveal()

  return (
    <section className="reveal scroll-mt-24 py-24 md:py-32" ref={ref}>
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
        01 — About
      </p>
      <h2 className="title-reveal mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Curious builder. Clear interfaces.
      </h2>

      <div
        ref={statsRef}
        className="stagger mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
      >
        <Stat value={450} suffix="+" label="Problems solved" />
        <Stat value={3} suffix="★" label="CodeChef" />
        <Stat value={7.3} decimals={1} label="CGPA / 10" />
        <Stat value={2026} label="Graduation" />
      </div>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div
          ref={textRef}
          className="reveal-left stagger space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          <p>
            I&apos;m Atharva Singh, a B.Tech Computer Science student at ABES
            Engineering College (2026, CGPA 7.3/10). I build full-stack web apps
            with React, Node.js, and MongoDB — with a focus on clean UX,
            solid APIs, and accessible interfaces.
          </p>
          <p>
            At Infopro Learning I work as a Junior HTML Developer improving
            accessibility against WCAG guidelines using semantic HTML, ARIA, and
            keyboard-first patterns. Outside work I&apos;ve solved{' '}
            <span className="font-medium text-ink">450+ DSA problems</span> and
            hold a <span className="font-medium text-ink">3★ CodeChef</span> rating.
          </p>
          <p>
            I care about shipping things that are fast, maintainable, and usable
            for everyone — from REST APIs and JWT auth to thoughtful frontend
            polish.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink sm:text-base">
            {stack.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={photoRef}
          className="reveal-right photo-frame relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
        >
          <div className="photo-outline absolute -inset-3 translate-x-3 translate-y-3 border border-signal/40" />
          <img
            src={profile}
            alt="Atharva Singh"
            className="relative aspect-[4/5] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}

export default About
