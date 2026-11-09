import { Fragment } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// Las habilidades se muestran como un objeto de JavaScript: es el idioma del oficio
const stack = [
  { key: 'frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  { key: 'backend', items: ['PHP', 'Node.js'] },
  { key: 'basesDeDatos', items: ['MySQL', 'PostgreSQL'] },
  { key: 'cms', items: ['WordPress', 'Elementor', 'WooCommerce', 'Custom Themes'] },
  { key: 'herramientas', items: ['Git', 'Linux', 'Figma'] },
  { key: 'aprendiendo', items: ['React Native'] },
]

const Str = ({ children }) => <span className="text-signal">'{children}'</span>

const CodePanel = () => {
  const lines = [
    <>
      <span className="text-accent">const</span> <span className="text-fg">christian</span>{' '}
      <span className="text-muted">=</span> <span className="text-muted">{'{'}</span>
    </>,
    <span key="rol" className="pl-4 sm:pl-6">
      <span className="text-fg/90">rol</span>
      <span className="text-muted">: </span>
      <Str>Analista Programador</Str>
      <span className="text-muted">,</span>
    </span>,
    ...stack.map((group) => (
      <span key={group.key} className="block pl-4 sm:pl-6">
        <span className="text-fg/90">{group.key}</span>
        <span className="text-muted">: [</span>
        {group.items.map((item, i) => (
          <Fragment key={item}>
            <span className="whitespace-nowrap">
              <Str>{item}</Str>
              {i < group.items.length - 1 && <span className="text-muted">,</span>}
            </span>
            {i < group.items.length - 1 && ' '}
          </Fragment>
        ))}
        <span className="text-muted">],</span>
      </span>
    )),
    <>
      <span className="text-muted">{'}'}</span>
      <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden="true" />
    </>,
  ]

  return (
    <figure className="relative w-full">
      {/* Halo de color detrás del panel */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(107,149,255,0.22),transparent_70%)]"
      />
      <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">christian.js</span>
        </div>
        <pre className="overflow-hidden p-4 font-mono text-[12.5px] leading-7 sm:p-6 sm:text-sm">
          <code className="block whitespace-normal">
            {lines.map((line, i) => (
              <span key={i} className="code-line grid grid-cols-[1.5rem_1fr] gap-3" style={{ '--i': i }}>
                <span className="select-none text-right text-line">{i + 1}</span>
                <span className="min-w-0 break-words">{line}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
      <figcaption className="sr-only">
        Habilidades: {stack.map((g) => g.items.join(', ')).join('; ')}.
      </figcaption>
    </figure>
  )
}

const Info = ({ id }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Disponible para nuevos proyectos
          </p>

          <h1 className="font-display text-[clamp(3rem,11vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.035em] text-fg">
            Christian
            <br />
            Rojas
          </h1>

          <p className="mt-6 font-display text-xl font-medium text-accent sm:text-2xl">
            Analista programador computacional
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Construyo sitios y aplicaciones web de punta a punta: la base de datos, la API, la interfaz y el pago en
            producción. Radicado en Chile, construyendo para el mundo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-fg"
            >
              Escríbeme
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center rounded-lg border border-line px-6 py-3 font-medium text-fg transition-colors hover:border-muted hover:bg-panel"
            >
              Ver experiencia
            </a>
            <div className="mt-2 flex items-center gap-1 sm:mt-0 sm:ml-2">
              <a
                href="https://github.com/crstnrjs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-lg text-muted transition-colors hover:bg-panel hover:text-fg"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/christian-rojas-dev59730"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-lg text-muted transition-colors hover:bg-panel hover:text-fg"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  )
}

export default Info
