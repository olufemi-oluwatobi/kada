import update from 'immutability-helper';
import {PRODUCT_ACTIONS} from './constants';

const initialState = {
  products: [],
  metadata: {
    isRequesting: false,
    error: null,
  },
};

/**
 * populate product state slice with fetched products
 * @param {Obect} state states
 * @param {Array} param1 product data coming from API
 * @returns
 */

const populateProduct = (state, {payload}) => {
  return update(state, {
    products: {
      $set: payload,
    },
  });
};

const requesting = (state, {isRequesting}) => {
  return update(state, {
    metadata: {
      $merge: {
        isRequesting,
      },
    },
  });
};

const indicateError = (state, {error}) =>
  update(state, {
    metadata: {
      $merge: {
        error,
      },
    },
  });

const productData = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.getProductsSuccess:
      return populateProduct(state, action);
    case PRODUCT_ACTIONS.getProductsError:
      return indicateError(state, action);
    case PRODUCT_ACTIONS.getProductsRequested:
      return requesting(state, action);
    default:
      return state;
  }
};
export default productData;
