import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { href: 'https://github.com/atharva0773', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/atharva0773/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/atharva-s-963425221/', icon: FaLinkedinIn, label: 'LinkedIn' },
]

function Leftsidebar() {
  return (
    <aside className="sidebar-enter pointer-events-none fixed bottom-0 left-0 z-40 hidden w-16 flex-col items-center md:flex lg:w-20">
      <ul className="pointer-events-auto mb-0 flex flex-col items-center gap-5 pb-2">
        {socials.map(({ href, icon: Icon, label }, index) => (
          <li
            key={label}
            className="animate-float"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover-icon text-ink-soft"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-line mt-5 h-28 w-px bg-ink/25" />
    </aside>
  )
}

export default Leftsidebar
