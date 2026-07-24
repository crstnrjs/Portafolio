import React, { useState } from 'react'
import { PaperAirplaneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '02c0d074-49a5-40e6-86fb-e988c8f923b3',
          from_name: 'Portafolio Christian Rojas',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      })

      const result = await res.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div id={id} className='flex flex-col justify-center items-center h-full gap-5 mb-100'>
      <div className='w-[60%] mx-auto mt-30 mb-20 flex flex-col justify-center items-center'>
        <span className="text-xs leading-5 text-blue-400 rounded-xl bg-blue-500/20 border p-2 whitespace-nowrap mb-10">
          Contacto
        </span>
        <h1 className="font-extrabold text-center text-5xl text-white mb-10" >
          Construyamos algo grande
        </h1>
        <h3 className="text-center text-lg text-gray-400" >
          ¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a conversar sobre nuevas oportunidades, desafíos técnicos o colaboraciones.
        </h3>
      </div>
      <div className='w-[90%] mx-auto mb-20 flex flex-col md:flex-row gap-6'>
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
        <div className='flex flex-col gap-4 rounded-2xl p-10 bg-gray-700/40 border-slate-500/50 border-[0.1px] flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col flex-1 mr-2'>
                <p className="text-gray-300">Nombre</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Nombre'
                  className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <p className="text-gray-300">Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='tu@email.com'
                  className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className="text-gray-300">Asunto</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder='De que se trata esto?'
                className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]'
              />
            </div>
            <div className='flex flex-col'>
              <p className="text-gray-300">Mensaje</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Cuéntame sobre tu proyecto, plazos y presupuesto'
                className='p-3 rounded-md bg-gray-700/40 text-white border-slate-500/50 border-[0.1px]'
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className='w-[80%] mx-auto bg-blue-500 hover:bg-blue-800 transition-colors text-white text-center p-3 rounded-md flex flex-row justify-center disabled:opacity-50'
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              <PaperAirplaneIcon className="justify-center h-5 w-5 ml-5" />
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm">¡Mensaje enviado! Te responderé pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">Hubo un error, intenta de nuevo o escríbeme directo al correo.</p>
            )}
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact