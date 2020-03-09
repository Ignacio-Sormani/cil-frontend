import Component from './home';
import { getActiveProductsThunk } from '../../../../redux/product/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  productList: state.product.list,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  getActiveProducts: () => dispatch(getActiveProductsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
