import initialState from './initialState';
import {
  GET_PRODUCTS_FETCHING,
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_REJECTED,
  GET_ACTIVE_PRODUCTS_FETCHING,
  GET_ACTIVE_PRODUCTS_FULFILLED,
  GET_ACTIVE_PRODUCTS_REJECTED,
  POST_PRODUCT_FETCHING,
  POST_PRODUCT_FULFILLED,
  POST_PRODUCT_REJECTED
} from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_FETCHING:
    case GET_ACTIVE_PRODUCTS_FETCHING:
    case POST_PRODUCT_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_PRODUCTS_FULFILLED:
    case GET_ACTIVE_PRODUCTS_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };
    case GET_PRODUCTS_REJECTED:
    case GET_ACTIVE_PRODUCTS_REJECTED:
    case POST_PRODUCT_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case POST_PRODUCT_FULFILLED:
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList
      };

    default:
      return state;
  }
};

export default reducer;
