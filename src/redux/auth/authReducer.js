import initialState from './authInitialState';
import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT
} from './authActions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_FULFILLED: {
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        token: action.payload.token,
        authenticated: true,
        isFetching: false
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
