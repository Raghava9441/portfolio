import React from 'react';
import './Product.scss'

const Product = ({img,link}) => {
  return (
  <div className='p'>
    
      <div className="p__browser">
        <div className="p__circle"></div>
        <div className="p__circle"></div>
        <div className="p__circle"></div>
        
      </div>
     
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="img" className="p-img" width={300} />
      </a>
  </div>
  );
};

export default Product;
