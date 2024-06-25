import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Perfiles from '../components/perfiles';
import './home.css'; // Importa tus estilos CSS aquí

const home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="content-container">
                <Perfiles />
            </div>
            <Footer />
        </div>
    );
}

export default home;
