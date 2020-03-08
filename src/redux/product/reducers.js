import initialState from './initialState';
import {
  GET_ACTIVE_PRODUCTS_FETCHING,
  GET_ACTIVE_PRODUCTS_FULFILLED,
  GET_ACTIVE_PRODUCTS_REJECTED
} from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_PRODUCTS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_ACTIVE_PRODUCTS_FULFILLED: {
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };
    }
    case GET_ACTIVE_PRODUCTS_REJECTED: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default reducer;
