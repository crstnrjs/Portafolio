import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Experience = ({ id }) => {
    const [open, setOpen] = useState(true)

    return (
        <div id={id} className='flex flex-col justify-center items-center h-full gap-5 w-[60%] mx-auto'>
            <div className='mx-auto mt-30 mb-20 flex flex-col justify-center items-center'>
                <span className="text-xs leading-5 text-blue-400 rounded-xl bg-blue-500/20 border p-2 whitespace-nowrap mb-10">
                    Experiencia Profesional
                </span>
                <h1 className="font-extrabold text-center text-5xl text-white mb-10" >
                    Donde he construido cosas
                </h1>
                <h3 className="text-center text-lg text-gray-400" >
                    Un historial de entregar software funcional — ya sea trabajando de forma individual o en equipos de desarrollo colaborativo.
                </h3>
            </div>
            {/* Experience Item */}
            <div
                onClick={() => setOpen(!open)}
                className='flex flex-col justify-center gap-3 w-full p-5 bg-gray-700/40 border-blue-500/50 shadow shadow-blue-500/20 border-[0.1px] rounded-xl cursor-pointer select-none'
            >
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm leading-6 font-semibold text-gray-200 uppercase">
                            Desarrollador Web Full Stack
                        </span>
                        <span className="text-xs leading-5 text-blue-400">
                            Freelance y Consultoría
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs leading-5 text-gray-400">Febrero 2026 - Abril 2026</span>
                        <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 p-1 whitespace-nowrap self-end">
                            Full Time
                        </span>
                    </div>
                </div>

                {open && (
                    <div className="mt-2 text-sm leading-6 text-gray-400">
                        <p>Desarrollo web end-to-end en PartnerLink.spa, cubriendo desde el levantamiento de requerimientos hasta la implementación y depuración de código en producción. Especializado en backends con PHP, integración de bases de datos MySQL, y soluciones WordPress adaptadas a necesidades reales de negocio.</p>
                        <ul className="list-disc list-inside mt-2 text-gray-200">
                            <li>Desarrollé funciones a medida para la gestión de cotizaciones, con integración directa a base de datos</li>
                            <li>Optimicé el sitio web mediante análisis y mejoras en el front-end (HTML, CSS, Bootstrap)</li>
                            <li>Integré y gestioné plugins clave para e-commerce (WooCommerce, Dokan) y formularios personalizados</li>
                        </ul>
                        <div className="mt-5 flex flex-row flex-wrap gap-4">
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">PHP</span>
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">MySQL</span>
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">WordPress</span>
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">HTML/CSS</span>
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">Bootstrap</span>
                            <span className="text-xs leading-5 text-blue-400 rounded-md bg-blue-500/20 border border-blue-400 p-1 whitespace-nowrap">WooCommerce</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience