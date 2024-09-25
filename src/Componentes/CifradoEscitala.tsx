import React, { useState } from 'react';
import '../Estilos/CifradoEscitala.css'; // Asegúrate de que este archivo CSS contenga los estilos adecuados.

const CifradoEscitala: React.FC = () => {
    const [mensaje, setMensaje] = useState<string>(''); // Mensaje a cifrar o descifrar
    const [clave, setClave] = useState<number>(4); // Número de columnas (clave), predeterminado a 4
    const [resultado, setResultado] = useState<string>(''); // Resultado del cifrado o descifrado

    // Función para cifrar el mensaje
    const cifrarMensaje = () => {
        const mensajeSinEspacios = mensaje.replace(/\s/g, ''); // Eliminar espacios
        const numColumnas = clave; // Usar el número de columnas especificado
        const numFilas = Math.ceil(mensajeSinEspacios.length / numColumnas); // Calcular número de filas
        let mensajeCifrado = '';

        // Crear una matriz para las columnas
        const matriz: string[][] = Array.from({ length: numFilas }, () => Array(numColumnas).fill(''));

        // Llenar la matriz
        for (let i = 0; i < mensajeSinEspacios.length; i++) {
            const fila = Math.floor(i / numColumnas);
            const columna = i % numColumnas;
            matriz[fila][columna] = mensajeSinEspacios[i];
        }

        // Leer la matriz por columnas (cifrado)
        for (let c = 0; c < numColumnas; c++) {
            for (let f = 0; f < numFilas; f++) {
                if (matriz[f][c]) {
                    mensajeCifrado += matriz[f][c]; // Agregar letra en orden de columna
                }
            }
        }

        setResultado(mensajeCifrado);
    };

    // Función para descifrar el mensaje
    const descifrarMensaje = () => {
        const mensajeCifrado = mensaje; // Usar el mensaje introducido como cifrado
        const numColumnas = clave; // Usar el número de columnas especificado
        const numFilas = Math.ceil(mensajeCifrado.length / numColumnas); // Calcular el número de filas
        let mensajeDescifrado = '';

        // Calcular cuántas columnas estarán llenas completamente y cuántas no
        const charsInFullColumns = mensajeCifrado.length % numColumnas; // Columnas que tienen más caracteres
        const charsPerColumn = Math.floor(mensajeCifrado.length / numColumnas); // Número mínimo de caracteres por columna

        // Crear la matriz para descifrar el mensaje
        const matriz: string[][] = Array.from({ length: numFilas }, () => []);

        let index = 0;

        // Llenar las columnas primero con las letras del mensaje cifrado
        for (let c = 0; c < numColumnas; c++) {
            const numCharsInColumn = charsPerColumn + (c < charsInFullColumns ? 1 : 0); // Determina cuántos caracteres tiene cada columna
            for (let f = 0; f < numCharsInColumn; f++) {
                matriz[f][c] = mensajeCifrado[index];
                index++;
            }
        }

        // Leer la matriz por filas (descifrado)
        for (let f = 0; f < numFilas; f++) {
            for (let c = 0; c < numColumnas; c++) {
                if (matriz[f][c]) {
                    mensajeDescifrado += matriz[f][c];
                }
            }
        }

        setResultado(mensajeDescifrado); // Actualizar el resultado con el mensaje descifrado
    };

    // Función para copiar el resultado al portapapeles
    const copiarResultado = () => {
        navigator.clipboard.writeText(resultado);
    };

    return (
        <div className="escitala-container">
            <div className="escitala-card">
                <h2>Cifrado Escítala</h2>
                <div className="input-group">
                    <label htmlFor="mensaje">Introduce el mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        rows={5}
                        placeholder="Introduce el mensaje a cifrar o descifrar"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="clave">Número de columnas (clave):</label>
                    <input
                        id="clave"
                        value={clave.toString()}
                        type="number"
                        onChange={(e) => setClave(parseInt(e.target.value) || 4)} // Actualiza la clave, predeterminado a 4
                        min="1"
                    />
                </div>

                <div className="button-group">
                    <button className="primary-button" onClick={cifrarMensaje}>Cifrar</button>
                    <button className="secondary-button" onClick={descifrarMensaje}>Descifrar</button>
                    <button className="secondary-button" onClick={copiarResultado}>Copiar</button>
                </div>

                {resultado && (
                    <p className="resultado">
                        Resultado: {resultado}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CifradoEscitala;
