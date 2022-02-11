import React, { useContext } from 'react';
import './toggle.scss';
import  moon from '../../img/moon.png';
import sun from '../../img/sun.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const handleClick = ()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return <div className='t'>  
    <img src={sun} alt="img" className='t__icon' />
    <img src={moon} alt="img" className='t__icon' />
    <div className="t__button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 :25}}> 
    </div>
  </div>;
};

export default Toggle;
