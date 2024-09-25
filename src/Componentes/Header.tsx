import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
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
                    <li className="nav-item">
                        <Link to="/guia">Guía</Link> {/* Reemplazar <a> por <Link> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/cesar">Cifrado César</Link> {/* Reemplazar <a> por <Link> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/escitala">Cifrado Escítala</Link> {/* Reemplazar <a> por <Link> */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderCifrado;
