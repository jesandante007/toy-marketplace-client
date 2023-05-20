import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import useTitle from '../../hooks/useTitlejs';
import Carousel from './Carousel';

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Hero />
            <Gallery />
            <ShopByCategory />
            <Carousel />
        </div>
    );
};

export default Home;