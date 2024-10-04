import React, { useState } from 'react';
import { ec as EC } from 'elliptic';

import '../Estilos/mqv.css'

// Inicializamos la curva elíptica P-256
const ec = new EC('p256');

const MQV: React.FC = () => {
    const [clavePrivadaA, setClavePrivadaA] = useState<string>('');
    const [clavePrivadaB, setClavePrivadaB] = useState<string>('');
    const [claveCompartida, setClaveCompartida] = useState<string>('');

    const generarParDeClaves = () => {
        const claveA = ec.genKeyPair();
        const claveB = ec.genKeyPair();

        setClavePrivadaA(claveA.getPrivate('hex'));
        setClavePrivadaB(claveB.getPrivate('hex'));

        return { claveA, claveB };
    };

    const calcularClaveCompartida = async (claveA: any, claveB: any) => {
        const clavePublicaA = claveA.getPublic('hex');
        const clavePublicaB = claveB.getPublic('hex');

        const compartidaA = claveA.derive(ec.keyFromPublic(clavePublicaB, 'hex').getPublic()).toString(16);
        const compartidaB = claveB.derive(ec.keyFromPublic(clavePublicaA, 'hex').getPublic()).toString(16);

        if (compartidaA === compartidaB) {
            const bufferCompartido = new Uint8Array(compartidaA.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16))).buffer;
            const bufferHash = await crypto.subtle.digest('SHA-256', bufferCompartido);
            const arrayHash = Array.from(new Uint8Array(bufferHash));
            const hashHex = arrayHash.map(b => b.toString(16).padStart(2, '0')).join('');

            setClaveCompartida(hashHex);
        }
    };

    const manejarGenerarClaves = async () => {
        const { claveA, claveB } = generarParDeClaves();
        await calcularClaveCompartida(claveA, claveB);
    };

    return (
        <div className="mqv-container">
            <div className="mqv-card">
                <h2>Ejemplo del Protocolo MQV</h2>
                <button onClick={manejarGenerarClaves}>Generar Par de Claves y Calcular Clave Compartida</button>
                <div className="mqv-resultados">
                    {claveCompartida && <div><h3>Clave Compartida:</h3> <p>{claveCompartida}</p></div>}
                    <h3>Clave Privada A:</h3> <p>{clavePrivadaA}</p>
                    <h3>Clave Privada B:</h3> <p>{clavePrivadaB}</p>
                </div>
            </div>
        </div>
    );
};

export default MQV;
