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
