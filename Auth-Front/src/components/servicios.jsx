import React from 'react';

const Servicios = ({ servicios }) => {
    return (
        <div>
            <h2>Servicios Ofrecidos</h2>
            <ul>
                {servicios.map((servicio, index) => (
                    <li key={index}>{servicio.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Servicios;