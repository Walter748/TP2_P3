import React from 'react';

const Proyectos = ({ proyectos }) => {
    return (
        <div>
            <h2>Proyectos</h2>
            <ul>
                {proyectos.map((proyecto, index) => (
                    <li key={index}>{proyecto.nombre} - {proyecto.descripcion}</li>
                ))}
            </ul>
        </div>
    );
}

export default Proyectos;