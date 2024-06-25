import React from 'react';
import Contactos from '../components/contactos';
import Proyectos from '../components/proyectos';
import Servicios from '../components/servicios';
import {Link} from 'react-router-dom'
import './VerPor.css'


const VerPor = () => {
    const contactos = [
        { nombre: 'Walter', email: 'walter@email.com' },
    ];

    const proyectos = [
        { nombre: 'Proyecto 1', descripcion: 'Descripción del Proyecto 1' },
        { nombre: 'Proyecto 2', descripcion: 'Descripción del Proyecto 2' },
    ];

    const servicios = [
        { nombre: 'Servicio 1' },
        { nombre: 'Servicio 2' },
        { nombre: 'Servicio 3' },
    ];

    return (
        <div className="home-container">
            <Link to='/' className='boton'>Inicio</Link>
            <h1>Portafolio</h1>
            <section>
                <Contactos contactos={contactos} />
            </section>
            <br />
            <section>
                <Proyectos proyectos={proyectos} />
            </section>
            <br />
            <section>
                <Servicios servicios={servicios} />
            </section>
        </div>
    );
}

export default VerPor;
