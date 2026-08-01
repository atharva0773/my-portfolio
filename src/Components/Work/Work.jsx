import { FaGithub } from 'react-icons/fa'
import project01 from '../../assets/project/01project.png'
import coverImage from '../../assets/project/coverImage.jpg'
import { useReveal } from '../../hooks/useReveal'
import { useTilt } from '../../hooks/useTilt'
import Magnetic from '../Magnetic/Magnetic'

const projects = [
  {
    title: 'Blogi',
    blurb:
      'Full-stack blogging platform with role-based JWT auth, REST APIs, and MongoDB schemas — query work improved performance by ~30%.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    live: 'https://blogi-m12d.onrender.com/',
    repo: 'https://github.com/atharva0773/blogi',
    image: coverImage,
    period: 'Sep 2025 – Nov 2025',
  },
  {
    title: 'Meeting Scheduler',
    blurb:
      'Priority-based scheduling with conflict resolution, dynamic time slots by urgency, and overlap handling in plain JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://meeting-schedular-nu.vercel.app',
    repo: 'https://github.com/atharva0773/meeting-schedular_',
    image: null,
    tone: 'from-[#1a1210] to-[#5c1824]',
    period: 'June 2025 – July 2025',
  },
  {
    title: 'Leet Matrix',
    blurb:
      'Track and visualize coding progress with charts, badges, and streak analytics powered by LeetCode data.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://leet-matric-six.vercel.app/',
    repo: 'https://github.com/atharva0773/leetMatric',
    image: project01,
  },
]

function ProjectRow({ project, index }) {
  const ref = useReveal()
  const tilt = useTilt(8)
  const reverse = index % 2 === 1

  return (
    <li
      ref={ref}
      className={`${
        reverse ? 'reveal-right' : 'reveal-left'
      } group grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        className="tilt-card relative block overflow-hidden bg-paper-deep"
      >
        <span className="tilt-shine" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-media aspect-[16/10] w-full object-cover"
          />
        ) : (
          <div
            className={`project-media flex aspect-[16/10] w-full items-end bg-gradient-to-br ${project.tone} p-8`}
          >
            <span className="font-display text-3xl font-bold text-mist/90">
              {project.title}
            </span>
          </div>
        )}
      </a>

      <div className="space-y-4 project-copy">
        <p className="font-display text-xs tracking-[0.2em] text-signal uppercase">
          {project.period || 'Featured'}
        </p>
        <h3 className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-signal sm:text-3xl">
          {project.title}
        </h3>
        <p className="max-w-md text-ink-soft leading-relaxed">{project.blurb}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-signal">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex items-center gap-4 pt-2">
          <Magnetic
            as="a"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/20 px-4 py-2 text-sm font-medium text-ink hover:border-signal hover:text-signal"
          >
            View project
          </Magnetic>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="hover-icon text-ink-soft"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </li>
  )
}

function Work() {
  const headerRef = useReveal()

  return (
    <section className="scroll-mt-24 py-24 md:py-32">
      <div ref={headerRef} className="reveal">
        <p className="font-display text-sm font-semibold tracking-[0.2em] text-signal uppercase">
          03 — Work
        </p>
        <h2 className="title-reveal mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          Selected projects
        </h2>
      </div>

      <ul className="mt-14 space-y-20 md:space-y-28">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </ul>
    </section>
  )
}

export default Work
