import React from 'react';
import '../Estilos/ComparisonFramework.css'; // Archivo CSS importado

const ComparisonFramework: React.FC = () => {
    return (
        <div className="frame-container">
            <div className="frame-card">
                <h2>Comparación: Vite + React + TypeScript vs Angular</h2>
                <div className="method-section">
                    <h3>1. Rendimiento y Tiempo de Compilación</h3>
                    <p>
                        <strong>Vite + React + TypeScript</strong> sobresale en rendimiento gracias a la compilación instantánea
                        mediante Hot Module Replacement (HMR), que mejora los tiempos de desarrollo. Además, Vite genera las dependencias
                        según se necesiten, lo que reduce los tiempos de inicio significativamente en comparación con Angular.
                    </p>
                    <p>
                        <strong>Angular</strong>, por otro lado, es un framework más pesado y robusto, lo que provoca tiempos de compilación
                        y arranque más largos, especialmente en proyectos más grandes.
                    </p>

                    <h3>2. Complejidad y Curva de Aprendizaje</h3>
                    <p>
                        <strong>React</strong> es sencillo de aprender, con una curva de aprendizaje baja, mientras que Angular es
                        más complejo debido a su arquitectura completa y sus muchas características integradas, como inyección de dependencias
                        y manejo de formularios.
                    </p>

                    <h3>3. Flexibilidad</h3>
                    <p>
                        Con <strong>React</strong>, tienes flexibilidad total para escoger librerías y herramientas según lo que necesites.
                        Mientras que <strong>Angular</strong> incluye todo en un paquete cerrado, React permite personalizar completamente el stack
                        de desarrollo según las necesidades del proyecto.
                    </p>

                    <h3>4. Ecosistema de TypeScript</h3>
                    <p>
                        Tanto <strong>React</strong> como <strong>Angular</strong> se integran bien con TypeScript. Sin embargo, React ofrece una mayor
                        flexibilidad y facilidad de integración con TypeScript en comparación con la estructura más rígida de Angular.
                    </p>

                    <h3>5. Comunidad y Ecosistema</h3>
                    <p>
                        <strong>React</strong> tiene una comunidad más grande y diversa con muchas bibliotecas bien mantenidas. Aunque
                        Angular cuenta con una comunidad activa respaldada por Google, el ecosistema de React tiende a ser más accesible
                        y dinámico.
                    </p>

                    <h3>Conclusión</h3>
                    <p>
                        Para proyectos que buscan velocidad de desarrollo, simplicidad y flexibilidad, <strong>Vite + React + TypeScript</strong> es
                        la mejor opción. Por otro lado, <strong>Angular</strong> es ideal para proyectos a gran escala que necesitan
                        una arquitectura más robusta, pero puede ser innecesario para proyectos más pequeños o con requisitos flexibles.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComparisonFramework;
