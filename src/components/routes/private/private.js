import React from 'react';
import './private.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Table from '../../shared/table';

class Private extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="table-container">
          <Table />
        </div>
        <Footer />
      </>
    );
  }
}

export default Private;
