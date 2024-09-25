import React from 'react';
import { Card } from 'primereact/card';
import '../Estilos/GuiaUso.css'; // Puedes usar este archivo para añadir estilos adicionales si lo deseas

const GuiaUso: React.FC = () => {
    return (
        <div className="guia-container">
            <Card className="guia-card">
                <h3>Bienvenido a la herramienta de Encriptación y Seguridad</h3>
                <p>
                    Esta aplicación te ayuda a proteger tus mensajes con dos métodos: 
                    <strong> Cifrado César</strong> y <strong>Cifrado Escítala</strong>.
                </p>

                <h4>Cifrado César</h4>
                <p>Para usar el Cifrado César:</p>
                <ol>
                    <li>Ingresa el texto que deseas cifrar.</li>
                    <li>Selecciona el número de desplazamiento (clave).</li>
                    <li>Haz clic en "Encriptar".</li>
                    <li>Para desencriptar, ingresa el texto cifrado y la misma clave.</li>
                </ol>

                <h4>Cifrado Escítala</h4>
                <p>Para usar el Cifrado Escítala:</p>
                <ol>
                    <li>Ingresa el texto que deseas cifrar.</li>
                    <li>Selecciona el número de columnas o filas.</li>
                    <li>Haz clic en "Encriptar".</li>
                    <li>Para desencriptar, ingresa el texto codificado y el mismo número de columnas o filas.</li>
                </ol>

            </Card>
        </div>
    );
};

export default GuiaUso;
