import { post } from '../../helpers/api';

export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGOUT = 'LOGOUT';

export const loginThunk = data => (dispatch, getState) => {
  dispatch({
    type: LOGIN_FETCHING
  });
  return post('/auth/login', data)
    .then(response => {
      if (!response.error) {
        return dispatch({
          type: LOGIN_FULFILLED,
          payload: response.data
        });
      } else {
        return dispatch({
          type: LOGIN_REJECTED,
          error: response.error
        });
      }
    })
    .catch(error => {
      return dispatch({
        type: LOGIN_REJECTED,
        error: error.error
      });
    });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
