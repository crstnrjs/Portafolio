import React from 'react'
import { AcademicCapIcon, CodeBracketIcon, PencilIcon, MagnifyingGlassIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const AboutMe = ({id}) => {
    return (
        <div id={id} className='mt-30 mb-20'>
            <div className='w-[60%] mx-auto'>
                <h2 className='mx-auto text-center text-5xl font-extrabold text-white font-display'>Más que un desarrollador — un artesano digital</h2>
                <p className='text-white text-center mt-5 w-[80%] mx-auto'>Aporto tanto profundidad técnica como visión de negocio a cada proyecto, asegurando que lo que se construye no solo funcione bien, sino que entregue un valor genuino.</p>
            </div>
            <div>
                <div class="grid grid-cols-3 gap-4 w-[80%] mx-auto mt-15 ">
                    <div className="col-span-2 text-white flex flex-row items-start rounded-md border-slate-500/50 border-[0.1px] bg-gray-700/40">
                        <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center m-3 p-2'>
                            <AcademicCapIcon className="w-7 h-7 text-blue-bright" />
                        </div>
                        <div className='flex flex-col w-full m-5'>
                            <h1 className='font-bold text-sm'> RESUMEN PROFESIONAL </h1>
                            <p className='text-gray-400 text-[13px]'>Analista Programador especializado en desarrollo web con PHP y bases de datos MySQL, con experiencia práctica en WordPress y proyectos reales de e-commerce. Combino atención al detalle con capacidad de resolución de problemas para transformar requerimientos de negocio en soluciones funcionales y escalables.</p>
                        </div>
                    </div>
                    <div class="text-white flex flex-row items-start rounded-md border-slate-500/50 border-[0.1px] bg-gray-700/40">
                        <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center m-3 p-2'>
                            <CodeBracketIcon className="w-7 h-7 text-blue-bright" />
                        </div>
                        <div className='flex flex-col w-full m-5'>
                            <h1 className='font-bold text-sm'> PASIÓN POR EL DESARROLLO </h1>
                            <p className='text-gray-400 text-[13px]'>El desarrollo de software no es solo mi profesión — es mi oficio. Me motiva el desafío de convertir ideas abstractas en productos funcionales, y me enorgullece escribir código limpio y mantenible que resista el paso del tiempo.</p>
                        </div>
                    </div>
                    <div class="text-white flex flex-row items-start rounded-md border-slate-500/50 border-[0.1px] bg-gray-700/40">
                        <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center m-3 p-2'>
                            <PencilIcon className="w-7 h-7 text-blue-bright" />
                        </div>
                        <div className='flex flex-col w-full m-5'>
                            <h1 className='font-bold text-sm'> APRENDIZAJE CONTINUO </h1>
                            <p className='text-gray-400 text-[13px]'>El panorama tecnológico evoluciona rápido, y me comprometo a evolucionar junto a él. Actualmente estoy ampliando mis conocimientos en React y React Native, sumando nuevas herramientas a mi base en PHP y desarrollo web. Para mí, aprender no es una etapa, es parte constante del oficio.</p>
                        </div>
                    </div>
                    <div class="text-white flex flex-row items-start rounded-md border-slate-500/50 border-[0.1px] bg-gray-700/40">
                        <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center m-3 p-2'>
                            <MagnifyingGlassIcon className="w-7 h-7 text-blue-bright" />
                        </div>
                        <div className='flex flex-col w-full m-5'>
                            <h1 className='font-bold text-sm'> RESOLUCIÓN DE PROBLEMAS </h1>
                            <p className='text-gray-400 text-[13px]'>Abordo cada desafío de forma analítica: descompongo problemas complejos en partes manejables, evalúo distintas alternativas de solución, y busco entregar resultados que sean sólidos técnicamente y viables en la práctica.</p>
                        </div>
                    </div>
                    <div class="text-white flex flex-row items-start rounded-md border-slate-500/50 border-[0.1px] bg-gray-700/40">
                        <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center m-3 p-2'>
                            <UserGroupIcon className="w-7 h-7 text-blue-bright" />
                        </div>
                        <div className='flex flex-col w-full m-5'>
                            <h1 className='font-bold text-sm'> COLABORACIÓN EN EQUIPO </h1>
                            <p className='text-gray-400 text-[13px]'>El buen software se construye en equipo. Me comunico con claridad, colaboro activamente y me adapto con facilidad a metodologías ágiles como Scrum. Tengo experiencia usando herramientas de gestión colaborativa como Trello, Notion y Jira para organizar tareas y mantener el flujo de trabajo del equipo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe
