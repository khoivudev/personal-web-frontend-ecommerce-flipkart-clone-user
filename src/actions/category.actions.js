import axios from "../helpers/axios";
import { categoryTypes } from "./types";

export const getAllCategory = () => (dispatch) => {
  dispatch({ type: categoryTypes.GET_ALL_CATEGORY_REQUEST });
  axios
    .get("/category/getcategory")
    .then((res) => {
      if (res.status === 200) {
        const { categoryList } = res.data;
        dispatch({
          type: categoryTypes.GET_ALL_CATEGORY_SUCCESS,
          payload: {
            categories: categoryList,
          },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: categoryTypes.GET_ALL_CATEGORY_FAILURE,
        payload: {
          error: error,
        },
      });
    });
};
