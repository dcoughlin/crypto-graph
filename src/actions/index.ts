import api from '../api';

export function fetchPrices() {
  const actionName = 'FETCH_PRICES';
  const actionNameSuccess = 'FETCH_PRICES_SUCCESS';
  const actionNameError = 'FETCH_PRICES_ERROR';

  return dispatch => {
    dispatch({ type: actionName });
    api
      .fetchPrices()
      .then(prices => {
        dispatch({ 
          type: actionNameSuccess,
          prices
        })  
      })
      .catch(error => {
        dispatch({ 
          type: actionNameError,
          error
        });  
      });
  };
}
