import React from 'react';

const Contactos = ({ contactos }) => {
    return (
        <div>
            <h2>Contactos</h2>
            <ul>
                {contactos.map((contacto, index) => (
                    <li key={index}>{contacto.nombre} - {contacto.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Contactos;