import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Christian Rojas, ir al inicio">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink transition-transform group-hover:-rotate-6">
            CR
          </span>
          <span className="hidden font-display text-base font-semibold text-fg sm:block">Christian Rojas</span>
        </a>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
