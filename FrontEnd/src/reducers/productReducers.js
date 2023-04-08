import {
  PRODDUCT_LIST_REQUEST,
  PRODDUCT_LIST_SUCCESS,
  PRODDUCT_LIST_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODDUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODDUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODDUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
