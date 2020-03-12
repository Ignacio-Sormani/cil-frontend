import React from 'react';
import './private.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Table from '../../shared/table';
import PostProductForm from '../../shared/post-product';

class Private extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="table-container">
          <Table />
        </div>
        <div className="post-product-container">
          <PostProductForm />
        </div>
        <Footer />
      </>
    );
  }
}

export default Private;
