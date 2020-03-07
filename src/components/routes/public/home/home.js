import React from 'react';
import './home.css';
import Product from '../../../shared/product';
import Header from '../../../layout/header';
import Footer from '../../../layout/footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    );
  }
}

export default Home;
