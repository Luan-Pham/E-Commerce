import {
  PRODDUCT_LIST_REQUEST,
  PRODDUCT_LIST_SUCCESS,
  PRODDUCT_LIST_FAIL,
  PRODDUCT_DETAILS_REQUEST,
  PRODDUCT_DETAILS_SUCCESS,
  PRODDUCT_DETAILS_FAIL,
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

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODDUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODDUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODDUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
