import React from 'react';
import '../Estilos/Footer.css'; // Archivo CSS para el footer

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2024 Desarrollado por Fatima Pardo Beltran. Todos los derechos reservados.</p>
                <p>Cuatrimestre: 7 Cuatrimestre </p>
                <p>Grupo: "B" </p>
            </div>
        </footer>
    );
};

export default Footer;
