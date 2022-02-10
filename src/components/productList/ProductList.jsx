import React from 'react';
import './ProductList.scss'
import Product from '../product/Product';
import {products} from '../../data'

const ProductList = () => {
  return (
  <div className='p1'>
      <div className="p1__texts">
          <h1 className="p1__title">Create & inspire. It's Raghava</h1>
          <p className="p1__desc">Raghava creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaites inside</p>
      </div>
      <div className="p1__list">
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
  </div>
    );
};

export default ProductList;
