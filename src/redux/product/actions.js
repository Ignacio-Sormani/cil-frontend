import { get } from '../../helpers/api';

export const GET_ACTIVE_PRODUCTS_FETCHING = 'GET_ACTIVE_PRODUCTS_FETCHING';
export const GET_ACTIVE_PRODUCTS_FULFILLED = 'GET_ACTIVE_PRODUCTS_FULFILLED';
export const GET_ACTIVE_PRODUCTS_REJECTED = 'GET_ACTIVE_PRODUCTS_REJECTED';

export const getActiveProductsThunk = () => dispatch => {
  dispatch({
    type: GET_ACTIVE_PRODUCTS_FETCHING
  });
  return get('/products/active')
    .then(response => {
      if (!response.error) {
        return dispatch({
          type: GET_ACTIVE_PRODUCTS_FULFILLED,
          payload: response.data
        });
      } else {
        return dispatch({
          type: GET_ACTIVE_PRODUCTS_REJECTED,
          error: response.error
        });
      }
    })
    .catch(error => {
      return dispatch({
        type: GET_ACTIVE_PRODUCTS_REJECTED,
        error: error.error
      });
    });
};
