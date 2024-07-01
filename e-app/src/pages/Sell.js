import React from 'react';
import './sell.css'; 

const Sell = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Sell Request Submitted!');
  };

  return (
    <div className="sell-form">
      <form className="container" onSubmit={handleSubmit}>
        <p className="heading">Sell Your Item</p>
        <div className="inputs">
          <label className="inputsLabel">Photo of Item: </label>
          <input type="file" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Name: </label>
          <input type="text" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Brand: </label>
          <input type="text" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">When was it bought: </label>
          <input type="date" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Price: </label>
          <input type="number" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Seller's Name: </label>
          <input type="text" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Contact Number: </label>
          <input type="text" className="input" />
        </div>
        <div className="inputs">
          <label className="inputsLabel">Seller's Location: </label>
          <input type="text" className="input" />
        </div>
        <div className="inputs">
          <input type="submit" className="input" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Sell;
