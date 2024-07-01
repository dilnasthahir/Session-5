// ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // Import your products data

const ProductList = () => (
  <div className='productList'>
    <h1>Products</h1>
    <div className="products">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} className="itemLink">
        <div  className="item">
          
          <div className="ItemCategory">{product.category}</div>
          <img src={product.image} alt="" className='itemImage' />
          <div className='itemDescription'>
            <div className='itemTitle'>{product.name}</div>
            <div className='itemPrice'>${product.price}</div>
            
            
          </div>
          
        </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ProductList;
