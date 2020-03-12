import { get, post } from '../../helpers/api';

export const GET_PRODUCTS_FETCHING = 'GET_PRODUCTS_FETCHING';
export const GET_PRODUCTS_FULFILLED = 'GET_PRODUCTS_FULFILLED';
export const GET_PRODUCTS_REJECTED = 'GET_PRODUCTS_REJECTED';
export const GET_ACTIVE_PRODUCTS_FETCHING = 'GET_ACTIVE_PRODUCTS_FETCHING';
export const GET_ACTIVE_PRODUCTS_FULFILLED = 'GET_ACTIVE_PRODUCTS_FULFILLED';
export const GET_ACTIVE_PRODUCTS_REJECTED = 'GET_ACTIVE_PRODUCTS_REJECTED';
export const POST_PRODUCT_FETCHING = 'POST_PRODUCT_FETCHING';
export const POST_PRODUCT_FULFILLED = 'POST_PRODUCT_FULFILLED';
export const POST_PRODUCT_REJECTED = 'POST_PRODUCT_REJECTED';

export const getProductsThunk = () => (dispatch, getState) => {
  dispatch({
    type: GET_PRODUCTS_FETCHING
  });
  const token = getState().auth.token || '';
  return get('/products', token)
    .then(response => {
      if (!response.error) {
        return dispatch({
          type: GET_PRODUCTS_FULFILLED,
          payload: response.data
        });
      } else {
        return dispatch({
          type: GET_PRODUCTS_REJECTED,
          error: response.error
        });
      }
    })
    .catch(error => {
      return dispatch({
        type: GET_PRODUCTS_REJECTED,
        error: error.error
      });
    });
};

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

export const postProductThunk = newProduct => (dispatch, getState) => {
  dispatch({
    type: POST_PRODUCT_FETCHING
  });
  const token = getState().auth.token || '';
  return post('/products/', newProduct, token)
    .then(response => {
      if (!response.error) {
        return dispatch({
          type: POST_PRODUCT_FULFILLED,
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
        type: POST_PRODUCT_REJECTED,
        error: error.error
      });
    });
};
