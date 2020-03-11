import React from 'react';
import './private.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Table from '../../shared/table';
import { Formik } from 'formik';

class Private extends React.Component {
  componentDidMount() {
    if (!this.props.productList.length) {
      this.props.getProducts();
    }
  }
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="table-container">
          <Table />
        </div>
        <div className="post-product-container">
          <Formik />
        </div>
        <Footer />
      </>
    );
  }
}

export default Private;
