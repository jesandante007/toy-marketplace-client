import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div>
            {toys.length}
        </div>
    );
};

export default AllToys;