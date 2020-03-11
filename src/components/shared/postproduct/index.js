import Component from './private/postproduct';
import { connect } from 'react-redux';
import { getProductsThunk } from '../../../redux/product/actions';
import { getCategoriesThunk } from '../../../redux/category/actions';

const mapStateToProps = state => ({
  categories: state.categories.list,
  productList: state.product.list
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesThunk()),
  getProducts: () => dispatch(getProductsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
