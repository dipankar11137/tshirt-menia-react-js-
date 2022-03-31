import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to t shirt mania</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">OrderReview</Link>
            </nav>
        </div>
    );
};

export default Header;