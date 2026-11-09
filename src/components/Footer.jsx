import { ArrowUpIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Christian Rojas. Hecho con React y Tailwind CSS.</p>
        <a href="#inicio" className="inline-flex items-center gap-1.5 self-start hover:text-fg sm:self-auto">
          Volver arriba
          <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
