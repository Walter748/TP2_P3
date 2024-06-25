import React from 'react'
import '../styles/proyectos.css'

const Proyectos = ({ proyectos }) => {
    return (
        <div className='div-proyect'>
            <h2>Proyectos</h2>
            <ul className='proyectos'>
                {proyectos.map((proyecto, index) => (
                    <li key={index}>{proyecto.nombre} - {proyecto.descripcion}</li>
                ))}
            </ul>
        </div>
    );
}

export default Proyectos;