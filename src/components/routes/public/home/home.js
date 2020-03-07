import React from 'react';
import './home.css';
import Product from '../../../shared/product';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className='product-list'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </>
    );
  }
}

export default Home;
