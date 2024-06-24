import React from 'react'
import '../style/contactos.css'

const Contactos = ({ contactos }) => {
    return (
        <div>
            <h2>Contactos</h2>
            <ul className='contacto'>
                {contactos.map((contacto, index) => (
                    <li key={index}>{contacto.nombre} - {contacto.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Contactos;