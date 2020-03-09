import React from 'react';
import './home.css';
import Header from '../../../layout/header';
import Footer from '../../../layout/footer';
import Product from '../../../shared/product';

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.productList.length) {
      this.props.getActiveProducts();
    }
  }
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="product-list">
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
