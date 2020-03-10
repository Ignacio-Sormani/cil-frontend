import Component from './header';
import { logout } from '../../../redux/auth/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  fullName: state.auth.fullName
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
