import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
      <div className="header">
        <div className='logo'>E-App</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
);

export default Header;
