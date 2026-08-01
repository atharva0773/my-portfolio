function Rightsidebar() {
  return (
    <aside className="sidebar-enter pointer-events-none fixed bottom-0 right-0 z-40 hidden w-16 flex-col items-center md:flex lg:w-20">
      <a
        href="mailto:atharvasingh0072@gmail.com"
        className="pointer-events-auto mb-24 text-[0.7rem] tracking-[0.22em] text-ink-soft transition-all duration-300 hover:-translate-y-1 hover:text-signal"
        style={{ writingMode: 'vertical-rl' }}
      >
        atharvasingh0072@gmail.com
      </a>
      <div className="sidebar-line h-28 w-px bg-ink/25" />
    </aside>
  )
}

export default Rightsidebar
