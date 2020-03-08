import React from 'react';
import './contact.css';
import Header from '../../../layout/header';
import Footer from '../../../layout/footer';

class Contact extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <Footer />
      </>
    );
  }
}

export default Contact;
