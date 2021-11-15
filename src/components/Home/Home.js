import React from 'react';
import Banners from './Banners/Banners';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import CustomerReview fro./CustomerReview/TestimonialmerReview";
import SubscribeForm from "../Sheared/SubscribeForm/SubscribeForm";

const Home = () => {
    return (
        <div id="home">
            <Banners></Banners>
            <Services></Services>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <SubscribeForm></SubscribeForm>

        </div>
    );
};

export default Home;