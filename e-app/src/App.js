import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sell from './pages/Sell';
import ProductList from './components/ProductList';
import Product from './components/Product'; 
import Cart from './components/Cart'; 
import products from './data/products'; 
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Product products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
