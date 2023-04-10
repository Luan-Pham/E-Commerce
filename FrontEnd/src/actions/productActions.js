import axios from 'axios';
import {
  PRODDUCT_LIST_REQUEST,
  PRODDUCT_LIST_SUCCESS,
  PRODDUCT_LIST_FAIL,
  PRODDUCT_DETAILS_REQUEST,
  PRODDUCT_DETAILS_SUCCESS,
  PRODDUCT_DETAILS_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODDUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODDUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODDUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODDUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
      type: PRODDUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODDUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
