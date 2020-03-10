import initialState from './initialState';
import {
  GET_CATEGORIES_FETCHING,
  GET_CATEGORIES_FULFILLED,
  GET_CATEGORIES_REJECTED
} from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_CATEGORIES_FULFILLED: {
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };
    }
    case GET_CATEGORIES_REJECTED: {
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
