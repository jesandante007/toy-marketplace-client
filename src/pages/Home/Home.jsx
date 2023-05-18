import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    return (
        <div>
            <Hero />
            <Gallery />
            <ShopByCategory />
        </div>
    );
};

export default Home;