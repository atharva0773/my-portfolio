import ibmGenAi from '../../assets/certs/ibm-genai.png'
import { useReveal } from '../../hooks/useReveal'

const certifications = [
  {
    title: 'Foundations in Generative AI',
    issuer: 'IBM SkillsBuild',
    image: ibmGenAi,
    blurb:
      'Completed IBM SkillsBuild coursework covering generative AI foundations, concepts, and practical applications.',
  },
]

function Certifications() {
  const ref = useReveal()
  const gridRef = useReveal()

  return (
    <section className="reveal scroll-mt-24 py-24 md:py-32" ref={ref}>
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
        05 — Certifications
      </p>
      <h2 className="title-reveal mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Learning on record
      </h2>

      <ul
        ref={gridRef}
        className="stagger mt-14 grid gap-8 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="group border-t border-ink/10 pt-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden bg-paper-deep">
              <img
                src={cert.image}
                alt={`${cert.title} — ${cert.issuer}`}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-5 font-display text-xs tracking-[0.18em] text-signal uppercase">
              {cert.issuer}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
              {cert.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
              {cert.blurb}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
