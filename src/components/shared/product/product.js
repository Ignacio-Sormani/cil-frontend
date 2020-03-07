import React from 'react';
import css from './product.css';

class Product extends React.Component {
  render() {
    return (
      <div className='product-box'>
        <div className='product-container'>
          <div className='product-img'></div>
          <div className='product-description'>
            <p className='name'>Guitarra Electrica (Viento)</p>
            <p className='description'>Descripcion: asd</p>
            <div className='availability'>
              <p className='price'>Precio: $15000</p>
              <p className='stock'>Sin stock</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
