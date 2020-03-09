import Component from './table';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  productList: state.product.list
});

export default connect(mapStateToProps)(Component);
