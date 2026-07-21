import React from 'react';

//STYLES
const styes = {
    nav: "flex items-center justify-center",
    list: "hidden md:flex gap-8",
    link: "p-2 justify-center text-m rounded-xl  text-gray-400 hover:text-gray-200 hover:bg-slate-800/50",
}

const Navbar = () => {
    const links = [
        { name: "Inicio", href: "#info" },
        { name: "Sobre Mi", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Experiencia", href: "#experience" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" }
    ];

    return (
        <nav className={styes.nav}>
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
        </nav>
    )
}
export default Navbar
