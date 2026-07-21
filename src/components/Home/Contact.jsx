import React from 'react'
import { PaperAirplaneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Contact = ({ id }) => {
  return (
    <div id={id} className='flex flex-col justify-center items-center h-full gap-5' >
      <div className='w-[60%] mx-auto mt-30 mb-20 flex flex-col justify-center items-center'>
        <h1 className="font-extrabold text-center text-5xl text-white mb-10" >
          Construyamos algo grande
        </h1>
        <h3 className="text-center text-lg text-gray-400" >
          ¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a conversar sobre nuevas oportunidades, desafíos técnicos o colaboraciones.
        </h3>
      </div>
      <div className='w-[90%] mx-auto mb-20 flex flex-row gap-6'>
        {/* COLUMNA IZQUIERDA - Info de contacto */}
        <div className='flex flex-col gap-4 w-full flex-1'>
          <div className='flex flex-col rounded-2xl p-7 bg-gray-700/40 border-slate-500/50 border-[0.1px] gap-2 w-full'>
            <h3 className="text-white font-bold">Disponible para nuevas oportunidades</h3>
            <p className="text-gray-400">Estoy en búsqueda de proyectos y oportunidades laborales, ya sea para sumarme a un equipo de desarrollo o colaborar en un proyecto específico. Si tienes algo en mente, conversemos</p>
          </div>

          <div className='flex flex-row rounded-2xl p-5 bg-gray-700/40 border-slate-500/50 border-[0.1px] gap-2 w-full'>
            <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center p-2'>
              <EnvelopeIcon className="h-5 w-5 text-blue-bright" />
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='font-bold text-sm text-gray-400'>EMAIL</h1>
              <p className='text-gray-500 text-[13px]'>christian.rojas59730@gmail.com</p>
            </div>
          </div>

          <a href="https://github.com/crstnrjs" target="_blank" rel="noopener noreferrer" className='flex flex-row rounded-2xl p-5 bg-gray-700/40 border-slate-500/50 border-[0.1px] gap-2 w-full hover:bg-gray-700/60 transition-colors'>
            <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center p-2'>
              <FaGithub className="h-5 w-5 text-blue-bright" />
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='font-bold text-sm text-gray-400'>GITHUB</h1>
              <p className='text-gray-500 text-[13px]'>https://github.com/crstnrjs</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/christian-rojas-dev59730" target="_blank" rel="noopener noreferrer" className='flex flex-row rounded-2xl p-5 bg-gray-700/40 border-slate-500/50 border-[0.1px] gap-2 w-full hover:bg-gray-700/60 transition-colors'>
            <div className='bg-blue-900/20 rounded-md border-slate-500/50 border-[0.1px] flex items-center justify-center p-2'>
              <FaLinkedin className="h-5 w-5 text-blue-bright" />
            </div>
            <div className='flex flex-col w-full'>
              <h1 className='font-bold text-sm text-gray-400'>LINKEDIN</h1>
              <p className='text-gray-500 text-[13px]'>www.linkedin.com/in/christian-rojas-dev59730</p>
            </div>
          </a>
        </div>

        {/* COLUMNA DERECHA - Formulario */}
        <div className='flex flex-col gap-4 rounded-2xl p-10 bg-gray-700/40 border-slate-500/50 border-[0.1px] w-0 flex-1'>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col flex-1 mr-2'>
                <p className="text-gray-300">Nombre</p>
                <input type="text" placeholder='Nombre' className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]' />
              </div>
              <div className='flex flex-col flex-1'>
                <p className="text-gray-300">Email</p>
                <input type="email" placeholder='tu@email.com' className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]' />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className="text-gray-300">Asunto</p>
              <input type="text" placeholder='De que se trata esto?' className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]' />
            </div>
            <div className='flex flex-col'>
              <p className="text-gray-300">Mensaje</p>
              <textarea placeholder='Cuéntame sobre tu proyecto, plazos y presupuesto' className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]' />
            </div>
            <button type="submit" className='w-[80%] mx-auto bg-blue-500 hover:bg-blue-800 transition-colors text-white text-center p-3 rounded-md flex flex-row justify-center'>
              Enviar mensaje <PaperAirplaneIcon className="justify-center h-5 w-5 ml-5" />
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
