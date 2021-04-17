import React from 'react';
import './Header.css'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import Brands from '../Brands/Brands';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <Brands></Brands>
        </div>
    );
};

export default Header;