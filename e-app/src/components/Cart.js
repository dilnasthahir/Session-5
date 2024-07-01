import React from 'react';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className='cart'>
      <div className="cartSide1">
        <div className="cartTitle">Shopping Cart</div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='cartItems'>
            {cartItems.map((item) => (
              <div className='cartItem' key={item.id}>
                <img src={item.image} alt="" className='cartItemImage' />
                <div className="cartItemDetails">
                  <div className='cartItemName'>{item.name}</div>
                  <div className='cartItemQty'>Qty: {item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cartSide2">
          <div className='receiptTitle'>Receipt</div>
          <hr />
          <div className='receiptItems'>
            {cartItems.map((item) => (
              <div className='receiptItem' key={item.id}>
                <div className='receiptItemName'>{item.name}</div>
                <div className='receiptItemQty'>Quantity: {item.quantity}</div>
                <div className='receiptItemPU'>Price per unit: ${item.price}</div>
                <div className='receiptItemTP'>Total price: ${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className='total'>Total: ${calculateTotal()}</div>
          <button className='placeOrderButton'>Place Order</button>

        </div>
      )}
    </div>
  );
};

export default Cart;
