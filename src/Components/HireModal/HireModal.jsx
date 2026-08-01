import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Mail, Phone, Linkedin, Copy, Check, FileText } from 'lucide-react'

const email = 'atharvasingh0072@gmail.com'
const phone = '+917880479526'
const linkedIn = 'https://www.linkedin.com/in/atharva-s-963425221/'
const resumeUrl =
  'https://drive.google.com/file/d/1nZ89_UehJXXUPj760qUG7vAM3zXxdz73/view?usp=sharing'

function HireModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) {
      document.documentElement.classList.remove('modal-open')
      document.body.style.overflow = ''
      return
    }

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    const hadCustomCursor = document.documentElement.classList.contains('has-cursor')

    document.documentElement.classList.add('modal-open')
    document.documentElement.classList.remove('has-cursor')
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.documentElement.classList.remove('modal-open')
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      if (hadCustomCursor) {
        document.documentElement.classList.add('has-cursor')
      }
    }
  }, [open, onClose])

  if (!open) return null

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return createPortal(
    <div
      className="hire-modal-root fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      <button
        type="button"
        className="hire-modal-backdrop absolute inset-0 bg-ink/60 backdrop-blur-md"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div className="hire-modal-panel relative z-10 w-full max-w-md border border-ink/10 bg-mist p-6 pt-8 shadow-xl sm:p-8 sm:pt-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center border border-ink/10 text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <p className="font-display text-xs font-semibold tracking-[0.2em] text-signal uppercase">
          Let&apos;s talk
        </p>
        <h2
          id="hire-modal-title"
          className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          Ready to hire Atharva?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
          Open to full-time full-stack / frontend / software engineer roles.
          Pick how you&apos;d like to connect:
        </p>

        <ul className="mt-6 space-y-3">
          <li>
            <a
              href={`mailto:${email}?subject=Full-time%20role%20opportunity&body=Hi%20Atharva%2C%0A%0AI'd%20like%20to%20talk%20about%20a%20full-time%20role.`}
              className="flex items-center gap-3 border border-ink/10 px-4 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Mail size={18} className="text-signal" />
              <span className="text-sm font-medium">Send email</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center gap-3 border border-ink/10 px-4 py-3 text-left text-ink transition-colors hover:border-signal hover:text-signal"
            >
              {copied ? (
                <Check size={18} className="text-signal" />
              ) : (
                <Copy size={18} className="text-signal" />
              )}
              <span className="text-sm font-medium">
                {copied ? 'Email copied' : 'Copy email address'}
              </span>
            </button>
          </li>
          <li>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 border border-ink/10 px-4 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Phone size={18} className="text-signal" />
              <span className="text-sm font-medium">Call +91 7880479526</span>
            </a>
          </li>
          <li>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-ink/10 px-4 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <Linkedin size={18} className="text-signal" />
              <span className="text-sm font-medium">Message on LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-ink/10 px-4 py-3 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <FileText size={18} className="text-signal" />
              <span className="text-sm font-medium">View resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  )
}

export default HireModal
