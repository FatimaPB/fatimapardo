import React, { useState } from 'react';
import '../Estilos/CifradoCesar.css';

const CifradoCesar = () => {
    const [texto, setTexto] = useState('');
    const [desplazamiento, setDesplazamiento] = useState(3);
    const [resultado, setResultado] = useState('');

    // Función para cifrar el texto
    const cifrar = (texto: string, desplazamiento: number) => {
        return texto.replace(/[a-z]/gi, (char) => {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 65 && charCode <= 90 ? 65 : 97; // Mayúscula o minúscula
            return String.fromCharCode(((charCode - base + desplazamiento) % 26) + base);
        });
    };

    // Función para manejar el evento de cifrado
    const handleCifrar = () => {
        setResultado(cifrar(texto, desplazamiento));
    };

    // Función para manejar el evento de descifrado
    const handleDescifrar = () => {
        setResultado(cifrar(texto, 26 - desplazamiento));
    };

    return (
        <div className="cesar-container">
            <div className="cesar-card">
                <h2>Cifrado César</h2>
                <div className="input-group">
                    <label htmlFor="texto">Introduce Texto</label>
                    <textarea
                        id="texto"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        rows={4}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="desplazamiento">Selecciona Desplazamiento:</label>
                    <input
                        id="desplazamiento"
                        type="number"
                        value={desplazamiento}
                        onChange={(e) => setDesplazamiento(Number(e.target.value))}
                        min={1}
                        max={25}
                    />
                </div>

                <div className="button-group">
                    <button onClick={handleCifrar}>Cifrar Texto</button>
                    <button onClick={handleDescifrar}>Descifrar Texto</button>
                </div>

                <div className="resultado">
                    <h3>Texto Cifrado/Descifrado</h3>
                    <p>{resultado ? resultado : 'Aquí aparecerá el resultado...'}</p>
                </div>
            </div>
        </div>
    );
};

export default CifradoCesar;
