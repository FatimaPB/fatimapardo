import React from 'react';
import '../Estilos/Frame.css'; // Archivo CSS

const Frame: React.FC = () => {
  return (
    <div className="frame-container">
      <div className="frame-card">
        <h2>Implementación de Métodos de Cifrado y Hash</h2>
        <p>
          En este proyecto, hemos integrado tres métodos de cifrado y hash: IDEA, MQV, y Blake3. Cada uno de estos métodos se ha implementado para cumplir con diferentes requisitos de seguridad y encriptación de datos, proporcionando una solución robusta para la protección de la información.
        </p>

        <div className="method-section">
          <h3>1. Cifrado IDEA</h3>
          <p>
            El algoritmo IDEA (International Data Encryption Algorithm) es un método de cifrado simétrico que utiliza una clave de 128 bits para cifrar y descifrar datos. 
            La implementación se enfoca en la operación XOR entre los bytes del texto y la clave, asegurando que la clave sea lo suficientemente fuerte para resistir ataques criptográficos. Este método se eligió por su balance entre seguridad y velocidad, ideal para mensajes cortos.
          </p>
        </div>

        <div className="method-section">
          <h3>2. MQV (Menezes–Qu–Vanstone)</h3>
          <p>
            MQV es un protocolo criptográfico de intercambio de claves basado en curvas elípticas que permite a dos partes establecer una clave compartida de manera segura. En este proyecto, MQV se utiliza principalmente para establecer comunicaciones seguras entre dos usuarios antes de realizar intercambios de datos confidenciales. Este método fue seleccionado por su fortaleza en el intercambio de claves seguras, con una estructura ligera que es adecuada para aplicaciones móviles y sistemas web.
          </p>
        </div>

        <div className="method-section">
          <h3>3. Blake3 Hash</h3>
          <p>
            El algoritmo de hash Blake3 es un sistema de hash criptográfico rápido y seguro que genera un valor de hash de longitud fija (en hexadecimal). Blake3 es altamente eficiente y se ha implementado en este proyecto para verificar la integridad de los datos transmitidos. A diferencia de los métodos de cifrado, Blake3 no cifra datos sino que crea un "resumen" único que se puede comparar para asegurar que los datos no han sido alterados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
