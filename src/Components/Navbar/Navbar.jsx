import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Magnetic from '../Magnetic/Magnetic'

const links = [
  { to: '/about', id: 'about', label: 'About', num: '01' },
  { to: '/experience', id: 'experience', label: 'Experience', num: '02' },
  { to: '/work', id: 'work', label: 'Work', num: '03' },
  { to: '/skill', id: 'skill', label: 'Skills', num: '04' },
  { to: '/certs', id: 'certs', label: 'Certs', num: '05' },
  { to: '/contact', id: 'contact', label: 'Contact', num: '06' },
]

const resumeUrl =
  'https://drive.google.com/file/d/11qAuZp2cklnhePP5mdIUs5R-wNkokA-X/view?usp=sharing'

const NAV_OFFSET = 80

function smoothScrollTo(id) {
  if (!id || id === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (to, id) => (event) => {
    event.preventDefault()
    setOpen(false)

    if (location.pathname === to) {
      smoothScrollTo(id)
      return
    }

    navigate(to)
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || open ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-12">
        <NavLink
          to="/"
          end
          className="font-display text-xl font-bold tracking-tight text-ink transition-transform duration-300 hover:scale-[1.04] hover:text-signal sm:text-2xl"
          onClick={goTo('/', 'hero')}
        >
          Atharva
        </NavLink>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={goTo(link.to, link.id)}
                className={({ isActive }) =>
                  `nav-link hover:text-signal ${
                    isActive ? 'is-active text-signal' : 'text-ink-soft'
                  }`
                }
              >
                <span className="mr-1.5 font-display text-xs text-signal">{link.num}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Magnetic
              as="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-signal px-4 py-2 text-signal hover:bg-signal hover:text-mist"
            >
              Resume
            </Magnetic>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col items-center gap-6 border-t border-ink/10 bg-paper/95 py-10 text-base font-medium backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={goTo(link.to, link.id)}
                className={({ isActive }) =>
                  `transition-colors hover:text-signal ${
                    isActive ? 'text-signal' : 'text-ink-soft'
                  }`
                }
              >
                <span className="mr-2 font-display text-sm text-signal">{link.num}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Magnetic
              as="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-signal px-5 py-2.5 text-signal hover:bg-signal hover:text-mist"
              onClick={() => setOpen(false)}
            >
              Resume
            </Magnetic>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
