import React from 'react';
import './toggle.scss';
import  moon from '../../img/moon.png';
import sun from '../../img/sun.png';

const Toggle = () => {
  return <div className='t'>  
    <img src={sun} alt="img" className='t__icon' />
    <img src={moon} alt="img" className='t__icon' />
    <div className="t__button" > 

    </div>
      
  </div>;
};

export default Toggle;
