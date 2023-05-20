import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import useTitle from '../../hooks/useTitle.js';
import Carousel from './Carousel';
import Subscribe from './Subscribe';

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Hero />
            <Gallery />
            <ShopByCategory />
            <Carousel />
            <Subscribe />
        </div>
    );
};

export default Home;