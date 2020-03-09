import Component from './private';
import { connect } from 'react-redux';
import { getProductsThunk } from '../../../redux/product/actions';

const mapStateToProps = state => ({
  productList: state.product.list
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
