import React from 'react';
import Banners from './Banners/Banners';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banners></Banners>
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;