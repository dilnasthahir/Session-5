import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

const HomePage = () => (
  <div className='homePage'>
    <div className="side1">
      <Header/>
      <Body />      
    </div>
    <div className="side2">
        <img src="https://goloop.vercel.app/_next/image?url=%2Fapple.png&w=1920&q=75" alt="" />
    </div>
 </div>
);

export default HomePage;
