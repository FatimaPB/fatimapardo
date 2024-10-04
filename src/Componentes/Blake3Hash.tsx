// src/Blake3Hash.tsx
import React, { useState } from 'react';
import { blake2b } from 'blakejs';
import '../Estilos/Blake.css'; // Asegúrate de tener los estilos CSS

const Blake3Hash: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Entrada de texto
  const [hash, setHash] = useState<string>('');   // Hash generado
  const [copied, setCopied] = useState<boolean>(false); // Estado de copiado

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setCopied(false); // Reinicia el estado de copiado cuando se cambia el input
  };

  const calculateHash = () => {
    if (!input) return;
    const data = new TextEncoder().encode(input);
    const hashBuffer = blake2b(data);
    
    const hashHex = Array.from(hashBuffer)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
      
    setHash(hashHex);
  };

  const copiarHash = () => {
    if (hash) {
      navigator.clipboard.writeText(hash);
      setCopied(true); // Cambia el estado a 'copiado'
    }
  };

  return (
    <div className="mqv-container">
      <div className="mqv-card">
        <h2>Generador de Hash Blake3</h2>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ingresa tu texto aquí"
          className="mqv-input"
        />
        <button
          onClick={calculateHash}
          disabled={!input}
          className={!input ? 'mqv-button disabled' : 'mqv-button'}
        >
          Generar Hash
        </button>

        {hash && (
          <div className="mqv-resultados">
            <h3>Resultado del Hash:</h3>
            <p>{hash}</p>
            <button onClick={copiarHash} className="mqv-button">Copiar Hash</button>
            {copied && <p className="copied-message">¡Hash copiado al portapapeles!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blake3Hash;
