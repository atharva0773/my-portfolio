import { useState } from 'react'

export const OPEN_ROLES = [
  'Open to full-time roles',
  'Available: Full-stack Developer',
  'Available: Frontend Developer',
  'Available: Software Engineer',
  'Available: React / Node roles',
  'Open to remote or on-site',
]

function AvailabilityBadge({ className = '' }) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((i) => (i + 1) % OPEN_ROLES.length)
  }

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`Current interest: ${OPEN_ROLES[index]}. Click to see next.`}
      title="Click to see roles I'm open to"
      className={`inline-flex items-center gap-3 border border-signal/40 bg-signal/10 px-4 py-2.5 text-left transition-colors hover:border-signal hover:bg-signal/15 ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
      </span>
      <span
        key={index}
        className="role-swap font-display text-sm font-semibold tracking-wide text-signal sm:text-base"
      >
        {OPEN_ROLES[index]}
      </span>
      <span className="ml-1 hidden text-[0.65rem] tracking-wider text-signal/70 uppercase sm:inline">
        tap
      </span>
    </button>
  )
}

export default AvailabilityBadge
