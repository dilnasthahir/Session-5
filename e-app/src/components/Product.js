import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(productId));

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      addToCart({ ...product, quantity });
      setIsAddingToCart(false);
      setAddedToCart(true);
    }, 1000); 
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <div className="productImage">
        <img src={product.image} alt={product.name} className="productImage" />
      </div>
      <div className="productDetails">
        <div className="productName">{product.name}</div>
        <div className="productCategory">{product.category}</div>
        <div className="productDescription">{product.description}</div>
        <div className="productPrice">${product.price}</div>
        <div className="productButtons">
          {addedToCart ? (
            <Link to="/cart" className='productButton'>Go to Cart</Link>
          ) : (
          <>
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`productButton ${isAddingToCart ? 'loading' : ''}`}
            >
              {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
            <div className='productQuantity'>Qty: {quantity} <button className='productQuantityButton' onClick={incrementQuantity}>+</button></div>
          </>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
