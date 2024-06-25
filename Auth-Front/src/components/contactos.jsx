import React from 'react'
import '../styles/contactos.css'

const Contactos = ({ contactos }) => {
    return (
        <div className='div-proyect'>
            <h2>Contactos</h2>
            <ul className='contacto'>
                {contactos.map((contacto, index) => (
                    <>
                    <li key={index}>Nombre: {contacto.nombre}</li>
                    <li key={index}>Email:  {contacto.email}</li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default Contactos;