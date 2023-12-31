/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import PopularEvent from './PopularEvent/PopularEvent';
import Customer from './Customer/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PopularEvent></PopularEvent>
            <Customer></Customer>
        </div>
    );
};

export default Home;