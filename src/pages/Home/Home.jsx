import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import useTitle from '../../hooks/useTitlejs';

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Hero />
            <Gallery />
            <ShopByCategory />
        </div>
    );
};

export default Home;