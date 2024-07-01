import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => (
      <div>
        <div className="bodySide1-Title">Welcome to world's best ecommerce experience.</div>
        <div className="bodySide1-SubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <Link to="/buy"><button className='bodyButton'>Get Started</button></Link>
      </div>
);
export default Body;


