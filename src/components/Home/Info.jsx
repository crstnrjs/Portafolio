import React from 'react'

const styles = {
  Skills: "text-gray-300 text-xs text-center font-mono p-1 rounded-md border-slate-500/50 border-[0.1px] ml-1 mr-1 whitespace-nowrap bg-gray-700/40 hover:text-white",
}

const Info = ({id}) => {
  const Front = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Ract" },
    { name: "Tailwind CSS" },
  ];

  const Back = [
    { name: "PHP" },
    { name: "Node.js" },
  ];

  const DataBase = [
    { name: "MySQL" },
    { name: "PostgreSQL" },
  ];

  const CMS = [
    { name: "WordPress" },
    { name: "Elementor" },
    { name: "WooCommerce" },
    { name: "Custom Themes" },
  ];

  const Tools = [
    { name: "Git" },
    { name: "Linux" },
    { name: "Figma" },
  ]

  const skillSections = [
    { title: "FRONTEND", color: "text-blue-400", items: Front },
    { title: "BACKEND", color: "text-indigo-500", items: Back },
    { title: "BASES DE DATOS", color: "text-emerald-500", items: DataBase },
    { title: "CMS", color: "text-amber-400", items: CMS },
    { title: "HERRAMIENTAS", color: "text-red-400", items: Tools },
  ];

  return (
    <div id={id} className='justify-center items-center pt-30 pl-10 pr-10 flex flex-row w-[90%] mx-auto'>
      {/*PRESENTACION, NOMBRE*/}
      <div className='flex flex-col flex-2'>
        <div className=''>
          <h1 className='text-7xl font-bold text-white'>CHRISTIAN ANDRES ROJAS RODRIGO</h1>
          <h2 className='text-5xl font-bold text-blue-bright'>ANALISTA PROGRAMADOR COMPUTACIONAL</h2>
        </div>
        <div className='mt-10'>
          <p className='text-white text-lg w-[80%]'>Analista Programador especializado en Desarrollo Web, Bases de Datos SQL y soluciones digitales escalables. Radicado en Chile, construyendo para el mundo.</p>
        </div>
        <div className=' mt-15 mb-15'>
          <a className="bg-blue-500 hover:bg-blue-800 transition-colors text-white py-3 px-10 rounded font-mono mr-5 text-center hidden">
            Ver Proyectos
          </a>
          <a href="#contact" className="bg-gray-800/30 text-white py-3 px-10 rounded border-[0.1px] border-white/30 hover:border-white hover:bg-gray-800/60 font-mono text-center">
            Contactame
          </a>
        </div>
      </div>
      {/*SKILLS*/}
      <div className='w-auto mx-auto'>
        <div className='bg-sky-950/25 border-slate-500/30 border-[0.1px] p-4 flex-1 rounded-xl h-full w-[80%] mx-auto'>
          <div className='flex flex-row justify-between'>
            <p className='text-white font-bold'>Habilidades</p>
            <p className='text-gray-300 text-xs'>2026</p>
          </div>
          <div className='flex flex-col'>
            {skillSections.map((section) => (
              <div key={section.title} className='mt-2 mb-2'>
                <h4 className={`font-bold ${section.color} text-[10px]`}>•{section.title}</h4>
                <div className='flex flex-row flex-wrap gap-1 mt-2'>
                  {section.items.map((item) => (
                    <p key={item.name} className={styles.Skills}>{item.name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
