import Component from './login';
import { loginThunk } from '../../../redux/auth/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
