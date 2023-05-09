// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
           <Link className='p-5 font-bold' to="/">Home</Link> 
           <Link className='p-5 font-bold'  to="/order">Order Review</Link> 
           <Link className='p-5 font-bold'  to="/about">About</Link> 
           <Link className='p-5 font-bold'  to="/contact">Contact Us</Link> 
        </nav>
    );
};

export default Header;