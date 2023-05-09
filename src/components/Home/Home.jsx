// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    const {id} = tshirts
    return (
        <div>
            <h1>This is my home page {tshirts.length}</h1>
            {id}
        </div>
    );
};

export default Home;