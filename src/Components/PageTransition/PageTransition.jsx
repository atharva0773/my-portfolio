import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LABELS = {
  '': 'Home',
  about: 'About',
  experience: 'Experience',
  work: 'Work',
  skill: 'Skills',
  certs: 'Certs',
  contact: 'Contact',
}

function PageTransition() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('Home')
  const [animKey, setAnimKey] = useState(0)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const section = pathname.replace(/^\/+|\/+$/g, '')
    setLabel(LABELS[section] ?? section)
    setAnimKey((k) => k + 1)
    setActive(true)

    const end = window.setTimeout(() => setActive(false), 700)
    return () => window.clearTimeout(end)
  }, [pathname])

  if (!active) return null

  return (
    <div
      key={animKey}
      className="page-transition is-active"
      aria-hidden="true"
    >
      <div className="page-transition-panel" />
      <p className="page-transition-label font-display">{label}</p>
    </div>
  )
}

export default PageTransition
