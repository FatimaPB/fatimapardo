import React, { useState } from 'react';
import '../Estilos/CifradoIdea.css';

const CifradoIDEA = () => {
    const [texto, setTexto] = useState('');
    const [clave, setClave] = useState(''); // Clave de 128 bits (16 caracteres hexadecimales)
    const [resultado, setResultado] = useState('');

    const cifrar = (texto: string, clave: string) => {
        let cifrado = '';
        for (let i = 0; i < texto.length; i++) {
            const charCode = texto.charCodeAt(i);
            const keyCharCode = clave.charCodeAt(i % clave.length); // Ciclar clave si es más corta que el texto
            const encryptedCharCode = charCode ^ keyCharCode; // Operación XOR entre texto y clave
            cifrado += String.fromCharCode(encryptedCharCode);
        }
        return cifrado;
    };

    const handleCifrar = () => {
        if (clave.length !== 16) {
            alert("La clave debe tener 16 caracteres.");
            return;
        }
        setResultado(cifrar(texto, clave));
    };

    const handleDescifrar = () => {
        if (clave.length !== 16) {
            alert("La clave debe tener 16 caracteres.");
            return;
        }
        setResultado(cifrar(texto, clave));
    };

    const copiarResultado = () => {
        navigator.clipboard.writeText(resultado);
    };

    return (
        <div className="idea-container">
            <div className="idea-card">
                <h2>Cifrado IDEA</h2>
                <div className="input-group">
                    <label htmlFor="texto">Introduce Texto</label>
                    <textarea
                        id="texto"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        rows={4}
                        placeholder="Escribe el mensaje a cifrar o descifrar"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="clave">Clave (128 bits - 16 caracteres)</label>
                    <input
                        id="clave"
                        type="text"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        maxLength={16} // Limitar la clave a 16 caracteres
                        placeholder="Introduce una clave de 16 caracteres"
                    />
                </div>

                <div className="button-group">
                    <button onClick={handleCifrar}>Cifrar Texto</button>
                    <button onClick={handleDescifrar}>Descifrar Texto</button>
                    <button onClick={copiarResultado}>Copiar</button>
                </div>

                <div className="resultado">
                    <h3>Texto Cifrado/Descifrado</h3>
                    <p>{resultado}</p>
                </div>
            </div>
        </div>
    );
};

export default CifradoIDEA;
