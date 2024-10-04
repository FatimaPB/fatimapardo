import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import '../Estilos/Header.css';

const HeaderCifrado = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        if (window.innerWidth <= 768) { // Ajusta el ancho máximo según tus necesidades
            setIsOpen(false);
        }
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
                        <Link to="/guia" onClick={closeMenu}>Guía</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/cesar" onClick={closeMenu}>Cifrado César</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/escitala" onClick={closeMenu}>Cifrado Escítala</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/idea" onClick={closeMenu}>Cifrado IDEA</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/mqv" onClick={closeMenu}>MQV</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/blake" onClick={closeMenu}>Blake3 hash</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                    <li className="nav-item">
                        <Link to="/frame" onClick={closeMenu}>?</Link> {/* Cerrar menú después de clic en Link */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderCifrado;
