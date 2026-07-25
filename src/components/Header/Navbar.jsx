import React, { useState } from 'react';

//STYLES
const styes = {
    nav: "relative flex items-center justify-between md:justify-center w-full",
    list: "hidden md:flex gap-8",
    link: "p-2 justify-center text-m rounded-xl  text-gray-400 hover:text-gray-200 hover:bg-slate-800/50",
    menuBtn: "md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-200 hover:bg-slate-800/50",
    mobileList: "md:hidden absolute top-full left-0 w-full mt-2 flex flex-col gap-1 p-3 rounded-xl bg-black/80 backdrop-blur-lg border border-white/10",
    mobileLink: "block p-2 rounded-xl text-gray-400 hover:text-gray-200 hover:bg-slate-800/50",
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Inicio", href: "#info" },
        { name: "Sobre Mi", href: "#about" },
        { name: "Experiencia", href: "#experience" },
        { name: "Contacto", href: "#contact" }
    ];

    return (
        <nav className={styes.nav}>
            {/* Menu de escritorio */}
            <ul className={styes.list}>
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className={styes.link}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Boton hamburguesa (solo mobile) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styes.menuBtn}
                aria-label="Abrir menu"
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Menu desplegable mobile */}
            {isOpen && (
                <ul className={styes.mobileList}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={styes.mobileLink}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
export default Navbar