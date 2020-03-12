import Component from './post-product';
import { connect } from 'react-redux';
import { postProductThunk } from '../../../redux/product/actions';
import { getCategoriesThunk } from '../../../redux/category/actions';

const mapStateToProps = state => ({
  categoryList: state.category.list
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesThunk()),
  postProduct: newProduct => dispatch(postProductThunk(newProduct))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
