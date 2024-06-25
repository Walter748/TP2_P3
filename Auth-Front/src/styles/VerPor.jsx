import React from 'react';
import Contactos from '../components/contactos';
import Proyectos from '../components/proyectos';
import Servicios from '../components/servicios';


const PortfolioView = () => {
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
        <div>
            <h1>Portafolio</h1>
            <Contactos contactos={contactos} />
            <Proyectos proyectos={proyectos} />
            <Servicios servicios={servicios} />
        </div>
    );
}

export default PortfolioView;
