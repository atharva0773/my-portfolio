import { useReveal } from '../../hooks/useReveal'

const groups = [
  {
    title: 'Languages',
    items: ['C++', 'Java', 'JavaScript'],
  },
  {
    title: 'Frameworks & Web',
    items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'REST APIs', 'JWT'],
  },
  {
    title: 'Data & Tools',
    items: ['MongoDB', 'MySQL', 'Git & GitHub', 'Postman', 'AWS', 'Firebase'],
  },
]

function Skill() {
  const ref = useReveal()
  const gridRef = useReveal()

  return (
    <section className="reveal scroll-mt-24 py-24 md:py-32" ref={ref}>
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
        04 — Skills
      </p>
      <h2 className="title-reveal mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Tools I reach for
      </h2>

      <div
        ref={gridRef}
        className="stagger mt-14 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-display text-lg font-semibold text-signal">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              {group.items.map((item) => (
                <li key={item} className="skill-row border-b border-ink/5 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
