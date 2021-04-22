import {PRODUCT_ACTIONS, PRODUCTS_URL} from './constants';
import {makeGetRequest} from '../../helpers/httpUtils';

// CREATE DISPATCH DATA FOR SUCCESS ACTIONS
const actionSuccess = (actionType, payload) => ({
  type: `${PRODUCT_ACTIONS[`${actionType}Success`]}`,
  payload,
});

// CREATE DISPATCH DATA FOR ERROR ACTIONS
const actionError = (actionType, payload) => ({
  type: `${PRODUCT_ACTIONS[`${actionType}Error`]}`,
  payload,
});

// CREATE DISPATCH DATA FOR REQUESTING ACTIONS
const actionRequested = (actionType, isRequesting) => ({
  type: `${PRODUCT_ACTIONS[`${actionType}Requested`]}`,
  isRequesting,
});

// Make API calls to get products
export const getProducts = queryData => {
  const actionType = 'getProducts';

  return async dispatch => {
    try {
      dispatch(actionRequested(actionType, true));

      const {status, data} = await makeGetRequest(PRODUCTS_URL, queryData);
      if (status === 200) return dispatch(actionSuccess(actionType, data));

      dispatch(actionError(actionType, 'failed to fetch products'));
    } catch (error) {
      return dispatch(actionError(actionType, error.message));
    } finally {
      // set requesting to false
      dispatch(actionRequested(actionType, false));
    }
  };
};
