import React from 'react';
import './header.css';
import logo from '../../../logo.png';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <Link
            className="link"
            onClick={() => this.props.historyProp.push('/')}
          >
            PRODUCTOS
          </Link>
          <img className="logo" src={logo} alt="logo" />
          <Link
            className="link"
            onClick={() => this.props.historyProp.push('/contact')}
          >
            CONTACTO
          </Link>
        </div>
        <Button
          variant="contained"
          type="submit"
          className="login-button"
          onClick={
            this.props.authenticated
              ? () => {
                  this.props.logout();
                  this.props.historyProp.push('/home');
                }
              : () => {
                  this.props.historyProp.push('/login');
                }
          }
        >
          {this.props.authenticated ? 'LOGOUT' : 'LOGIN'}
        </Button>
        {this.props.fullName && (
          <div className="username-welcome">
            <div>Bienvenido,</div>
            <div>{this.props.fullName}</div>
          </div>
        )}
      </>
    );
  }
}

export default Header;
