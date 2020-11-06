import axios from "../helpers/axios";
import { productTypes } from "./types";

export const getProductsByCategorySlug = (slug) => (dispatch) => {
  dispatch({ type: productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_REQUEST });
  axios
    .get(`/product/${slug}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_SUCCESS,
          payload: {
            products: res.data.products,
            productsByPrice: res.data.productsByPrice,
          },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_FAILURE,
        payload: {
          error: error,
        },
      });
    });
};

export const getProductPage = (params) => (dispatch) => {
  dispatch({ type: productTypes.GET_PRODUCT_PAGE_REQUEST });
  const { cid, type } = params;
  axios
    .get(`/page/${cid}/${type}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: productTypes.GET_PRODUCT_PAGE_SUCCESS,
          payload: {
            page: res.data.page,
          },
        });
      } else {
        dispatch({
          type: productTypes.GET_PRODUCT_PAGE_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductDetailsById = (payload) => (dispatch) => {
  dispatch({ type: productTypes.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
  const { productId } = payload.params;
  axios
    .get(`/product/details/${productId}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: productTypes.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
          payload: {
            productDetails: res.data.product,
          },
        });
      } else {
        dispatch({
          type: productTypes.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
          error: res.data.error,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
