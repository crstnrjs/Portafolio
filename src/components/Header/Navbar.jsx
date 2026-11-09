import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  // Marca en el menú la sección que se está viendo
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4
      let current = links[0].href
      for (const link of links) {
        const section = document.querySelector(link.href)
        if (section && section.getBoundingClientRect().top <= line) current = link.href
      }
      // Al llegar al final de la página, la última sección queda activa
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = links[links.length - 1].href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <nav aria-label="Principal">
      {/* Escritorio */}
      <ul className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                active === link.href ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="ml-3">
          <a
            href="#contacto"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-fg"
          >
            Escríbeme
          </a>
        </li>
      </ul>

      {/* Móvil */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg hover:bg-panel-2 md:hidden"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="menu-movil"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {isOpen && (
        <ul
          id="menu-movil"
          className="absolute inset-x-0 top-16 flex flex-col gap-1 border-b border-line bg-ink px-4 pt-2 pb-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base ${
                  active === link.href ? 'bg-panel-2 text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
