import React from 'react';
import './private.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

class Private extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <Footer />
      </>
    );
  }
}

export default Private;
