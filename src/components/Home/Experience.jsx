import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

// La primera del arreglo es la más reciente y es la única que se muestra abierta
const experiences = [
    {
        role: 'Desarrollador Full Stack',
        company: 'PintaPatitas',
        period: 'Nov 2026 – Presente',
        type: 'Freelance',
        description:
            'Diseño y desarrollo de punta a punta de PintaPatitas, plataforma web para una artista que crea retratos personalizados de mascotas y vende obras originales. Construí el frontend, la API, la base de datos, los pagos y el despliegue en producción.',
        highlights: [
            'Desarrollé un asistente de pedido de retratos y una tienda de obras únicas con reserva atómica de stock por 20 minutos para evitar ventas duplicadas',
            'Integré Mercado Pago Marketplace (OAuth de la vendedora, comisión de plataforma, abono y saldo) con webhooks para confirmar pagos',
            'Construí un panel de administración para gestionar pedidos, catálogo, ventas, envíos Starken y el contenido de la landing sin tocar código',
            'Diseñé el modelo de datos en Supabase/PostgreSQL con migraciones, políticas RLS y almacenamiento de imágenes',
            'Implementé correos transaccionales, validación de RUT, rate limiting y protección anti-bots en la API',
            'Optimicé SEO y visibilidad: sitemap generado en el build, robots.txt, datos estructurados JSON-LD y página 404 real',
        ],
        skills: [
            'React',
            'React Router',
            'Tailwind CSS',
            'shadcn/ui',
            'Node.js',
            'Express',
            'Supabase',
            'PostgreSQL',
            'Mercado Pago API',
            'Webhooks',
            'Nodemailer',
            'SEO',
            'Vite',
            'Git/GitHub',
            'Hostinger',
        ],
    },
    {
        role: 'Desarrollador Web Full Stack',
        company: 'PartnerLink.spa',
        period: 'Feb 2026 – Abr 2026',
        type: 'Freelance y consultoría, full time',
        description:
            'Desarrollo web de punta a punta en PartnerLink.spa, desde el levantamiento de requerimientos hasta la implementación y depuración de código en producción. Especializado en backends con PHP, integración de bases de datos MySQL y soluciones WordPress adaptadas a necesidades reales de negocio.',
        highlights: [
            'Desarrollé funciones a medida para la gestión de cotizaciones, con integración directa a base de datos',
            'Optimicé el sitio web mediante análisis y mejoras en el front-end (HTML, CSS, Bootstrap)',
            'Integré y gestioné plugins clave para e-commerce (WooCommerce, Dokan) y formularios personalizados',
        ],
        skills: ['PHP', 'MySQL', 'WordPress', 'HTML/CSS', 'Bootstrap', 'WooCommerce'],
    },
]

const ExperienceItem = ({ experience, defaultOpen, current }) => {
    const [open, setOpen] = useState(defaultOpen)
    const panelId = useId()

    return (
        <li className="relative pl-8 sm:pl-12">
            {/* Punto de la línea de tiempo */}
            <span
                aria-hidden="true"
                className={`absolute top-7 left-0 h-[11px] w-[11px] -translate-x-[5px] rounded-full ring-4 ring-ink ${
                    current ? 'bg-signal' : 'bg-line'
                }`}
            />

            <div
                className={`rounded-2xl border transition-colors ${
                    open ? 'border-line bg-panel' : 'border-transparent hover:border-line hover:bg-panel/60'
                }`}
            >
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 rounded-2xl p-5 text-left sm:p-6"
                >
                    <div className="min-w-0">
                        <p className="text-sm text-muted">{experience.period}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-fg sm:text-2xl">
                            {experience.role}
                        </h3>
                        <p className="mt-1 text-accent">
                            {experience.company}
                            <span className="text-muted"> / {experience.type}</span>
                        </p>
                    </div>
                    <ChevronDown
                        aria-hidden="true"
                        className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                {/* Expandir y contraer animando la altura */}
                <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                >
                    <div className="overflow-hidden" inert={!open}>
                        <div className="px-5 pb-6 sm:px-6">
                            <p className="max-w-[65ch] leading-relaxed text-muted">{experience.description}</p>
                            <ul className="mt-5 space-y-3">
                                {experience.highlights.map((item) => (
                                    <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
                                        <span
                                            aria-hidden="true"
                                            className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                        />
                                        <span className="max-w-[65ch]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías usadas">
                                {experience.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-md border border-line bg-panel-2 px-2.5 py-1 text-sm text-fg/85"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

const Experience = ({ id }) => {
    return (
        <section id={id} className="border-t border-line">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
                <div className="max-w-2xl">
                    <h2 className="font-display text-sm font-semibold text-accent">Experiencia</h2>
                    <p className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-fg sm:text-4xl">
                        Donde he construido cosas.
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                        Software funcionando en producción, ya sea trabajando de forma individual o en equipos de
                        desarrollo colaborativo.
                    </p>
                </div>

                <ol className="relative mt-14 max-w-4xl space-y-6 border-l border-line">
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={experience.company}
                            experience={experience}
                            defaultOpen={index === 0}
                            current={index === 0}
                        />
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
