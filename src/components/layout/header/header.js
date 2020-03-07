import React from 'react';
import './header.css';
import logo from '../../../logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className='header'>
          <Link className='link' to='/'>
            PRODUCTOS
          </Link>
          <img className='logo' src={logo} alt='logo' />
          <Link className='link' to='/contact'>
            CONTACTO
          </Link>
        </div>
        <Link className='absolute-link' to='/login'>
          <button className='login-button'>LOGIN</button>
        </Link>
      </>
    );
  }
}

export default Header;
