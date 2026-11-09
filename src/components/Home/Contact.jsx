import { useState } from 'react'
import { PaperAirplaneIcon, EnvelopeIcon, CheckIcon, Square2StackIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const EMAIL = 'christian.rojas59730@gmail.com'
// La clave de Web3Forms es pública por diseño; se puede sobrescribir con VITE_WEB3FORMS_KEY
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '02c0d074-49a5-40e6-86fb-e988c8f923b3'

const emptyForm = { name: '', email: '', subject: '', message: '' }

const inputClass =
  'w-full rounded-lg border border-line bg-ink px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30'

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-fg/90">
      {label}
    </label>
    {children}
  </div>
)

const Contact = ({ id }) => {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Campo trampa: si un bot lo llena, no se envía
    if (e.target.botcheck?.checked) return
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Portafolio Christian Rojas',
          ...formData,
        }),
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        setFormData(emptyForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const links = [
    { icon: FaGithub, label: 'GitHub', value: 'github.com/crstnrjs', href: 'https://github.com/crstnrjs' },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'in/christian-rojas-dev59730',
      href: 'https://www.linkedin.com/in/christian-rojas-dev59730',
    },
  ]

  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Columna izquierda */}
        <div>
          <h2 className="font-display text-sm font-semibold text-accent">Contacto</h2>
          <p className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-fg sm:text-5xl">
            Hablemos de tu proyecto.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Busco sumarme a un equipo de desarrollo o colaborar en proyectos específicos. Si tienes algo en mente o
            solo quieres saludar, escríbeme.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-line bg-panel p-2 pl-4">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={`mailto:${EMAIL}`}
                className="min-w-0 flex-1 truncate py-2 text-fg underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-panel-2 hover:text-fg"
                aria-label="Copiar correo"
              >
                {copied ? (
                  <CheckIcon className="h-4 w-4 text-signal" />
                ) : (
                  <Square2StackIcon className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line bg-panel px-4 py-3 transition-colors hover:border-muted"
                >
                  <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-fg">{label}</span>
                    <span className="block truncate text-sm text-muted">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-line bg-panel p-5 sm:p-8"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Nombre">
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className={inputClass}
              />
            </Field>
            <Field id="email" label="Correo">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field id="subject" label="Asunto">
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="¿De qué se trata?"
              className={inputClass}
            />
          </Field>

          <Field id="message" label="Mensaje">
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Cuéntame sobre tu proyecto, plazos y presupuesto"
              className={`${inputClass} resize-y`}
            />
          </Field>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-fg disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <p aria-live="polite" className="min-h-[1.5rem] text-center text-sm">
            {status === 'success' && <span className="text-signal">Mensaje enviado. Te responderé pronto.</span>}
            {status === 'error' && (
              <span className="text-red-300">
                No se pudo enviar el mensaje. Inténtalo otra vez o escríbeme a {EMAIL}.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
