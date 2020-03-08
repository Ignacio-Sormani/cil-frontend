import Component from './routes';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Component);
