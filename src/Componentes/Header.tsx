import React, { useState } from 'react';
import '../Estilos/Header.css';

const HeaderCifrado = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                {/* Botón de menú solo visible en pantallas pequeñas */}
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                    <li className="nav-item"><a href="/">Guía</a></li>
                    <li className="nav-item"><a href="/cesar">Cifrado César</a></li>
                    <li className="nav-item"><a href="/escitala">Cifrado Escítala</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderCifrado;
