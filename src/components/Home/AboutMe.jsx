import { CodeBracketIcon, PencilIcon, MagnifyingGlassIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const qualities = [
  {
    icon: CodeBracketIcon,
    title: 'Pasión por el desarrollo',
    text: 'El desarrollo de software no es solo mi profesión, es mi oficio. Me motiva convertir ideas abstractas en productos funcionales y escribir código limpio y mantenible que resista el paso del tiempo.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Resolución de problemas',
    text: 'Abordo cada desafío de forma analítica: descompongo problemas complejos en partes manejables, evalúo alternativas y busco resultados sólidos técnicamente y viables en la práctica.',
  },
  {
    icon: UserGroupIcon,
    title: 'Colaboración en equipo',
    text: 'Me comunico con claridad, colaboro activamente y me adapto a metodologías ágiles como Scrum. Uso Trello, Notion y Jira para organizar tareas y mantener el flujo del equipo.',
  },
  {
    icon: PencilIcon,
    title: 'Aprendizaje continuo',
    text: 'Estoy ampliando mis conocimientos en React y React Native, sumando nuevas herramientas a mi base en PHP y desarrollo web. Aprender no es una etapa: es parte constante del oficio.',
  },
]

const AboutMe = ({ id }) => {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-sm font-semibold text-accent">Sobre mí</h2>
          <p className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-fg sm:text-4xl">
            Código pensado para el negocio que lo va a usar.
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Soy analista programador especializado en desarrollo web con PHP y bases de datos MySQL, con experiencia
            práctica en WordPress y proyectos reales de e-commerce. Combino atención al detalle con capacidad de
            resolución de problemas para transformar requerimientos de negocio en soluciones funcionales y escalables.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {qualities.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5 py-7 sm:gap-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-panel-2 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-fg">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutMe
