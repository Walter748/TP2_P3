import React from 'react';
import '../styles/servicios.css'

const Servicios = ({ servicios }) => {
    return (
        <div>
            <h2>Servicios Ofrecidos</h2>
            <ul className='servicios'>
                {servicios.map((servicio, index) => (
                    <li key={index}>{servicio.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Servicios;