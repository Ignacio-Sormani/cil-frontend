import Component from './login';
import { loginThunk } from '../../../redux/auth/authActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  loginThunk: user => dispatch(loginThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
