import { useReveal } from '../../hooks/useReveal'

const experience = [
  {
    role: 'Junior HTML Developer',
    org: 'Infopro Learning Inc',
    time: 'Present',
    points: [
      'Improved web accessibility by fixing UI issues against WCAG guidelines.',
      'Resolved issues with semantic HTML, ARIA roles, and keyboard navigation.',
      'Collaborated with teams to close accessibility gaps across web apps.',
      'Enhanced compliance and experience for diverse users.',
    ],
  },
]

const education = [
  {
    school: 'ABES Engineering College, Ghaziabad',
    detail: 'B.Tech in Computer Science Engineering — CGPA 7.3/10',
    time: '2026',
    place: 'Uttar Pradesh',
  },
]

const extras = [
  {
    title: 'Competitive Programming',
    detail: '450+ problems across LeetCode, CodeChef, and HackerRank · 3★ on CodeChef',
  },
  {
    title: 'Tech Fest Volunteer',
    detail: 'Event coordinator for coding competitions with 100+ participants',
  },
]

function Experience() {
  const ref = useReveal()

  return (
    <section className="reveal scroll-mt-24 py-24 md:py-32" ref={ref}>
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
        02 — Experience
      </p>
      <h2 className="title-reveal mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Where I&apos;ve been building
      </h2>

      <div className="mt-14 space-y-14">
        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Work
          </h3>
          <ul className="mt-6 space-y-10 border-l border-ink/15 pl-6 md:pl-8">
            {experience.map((job) => (
              <li key={job.org} className="relative">
                <span className="absolute top-1.5 -left-[1.9rem] h-2.5 w-2.5 rounded-full bg-signal md:-left-[2.15rem]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {job.role}
                  </h4>
                  <span className="text-sm font-medium text-signal">{job.time}</span>
                </div>
                <p className="mt-1 text-ink-soft">{job.org}</p>
                <ul className="mt-4 space-y-2 text-ink-soft">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Education
          </h3>
          <ul className="mt-6 space-y-8 border-l border-ink/15 pl-6 md:pl-8">
            {education.map((ed) => (
              <li key={ed.school} className="relative">
                <span className="absolute top-1.5 -left-[1.9rem] h-2.5 w-2.5 rounded-full bg-signal md:-left-[2.15rem]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {ed.school}
                  </h4>
                  <span className="text-sm font-medium text-signal">{ed.time}</span>
                </div>
                <p className="mt-1 text-ink-soft">{ed.detail}</p>
                <p className="mt-1 text-sm text-ink-soft/80">{ed.place}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Beyond code
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {extras.map((item) => (
              <li
                key={item.title}
                className="border-t border-ink/10 pt-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <h4 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
