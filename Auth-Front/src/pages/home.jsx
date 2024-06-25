import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Perfiles from '../components/perfiles';

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
