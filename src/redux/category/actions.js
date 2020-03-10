import { get } from '../../helpers/api';

export const GET_CATEGORIES_FETCHING = 'GET_CATEGORIES_FETCHING';
export const GET_CATEGORIES_FULFILLED = 'GET_CATEGORIES_FULFILLED';
export const GET_CATEGORIES_REJECTED = 'GET_CATEGORIES_REJECTED';

export const getCategoriesThunk = () => (dispatch, getState) => {
  dispatch({
    type: GET_CATEGORIES_FETCHING
  });
  // const token = getState().auth || '';

  return get('/categories/')
    .then(response => {
      if (!response.error) {
        return dispatch({
          type: GET_CATEGORIES_FULFILLED,
          payload: response.data
        });
      } else {
        return dispatch({
          type: GET_CATEGORIES_REJECTED,
          error: response.error
        });
      }
    })
    .catch(error => {
      return dispatch({
        type: GET_CATEGORIES_REJECTED,
        error: error.error
      });
    });
};
