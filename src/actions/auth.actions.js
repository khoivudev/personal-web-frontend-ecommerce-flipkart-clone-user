import { authTypes, cartTypes } from "./types";
import axios from "../helpers/axios";

export const login = (user) => (dispatch) => {
  dispatch({ type: authTypes.LOGIN_REQUEST });
  axios
    .post("/auth/signin", user)
    .then((res) => {
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authTypes.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: authTypes.LOGIN_FAILURE,
        payload: {
          error: error.response.data.error,
        },
      });
    });
};

export const isUserLoggedIn = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({
      type: authTypes.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } else {
    dispatch({
      type: authTypes.LOGIN_FAILURE,
      payload: {
        error: "Please login to continue",
      },
    });
  }
};

export const signout = () => (dispatch) => {
  dispatch({ type: authTypes.LOGOUT_REQUEST });
  axios
    .post("/auth/signout")
    .then((res) => {
      if (res.status === 200) {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
        localStorage.clear();
        dispatch({
          type: authTypes.LOGOUT_SUCCESS,
        });
        dispatch({
          type: cartTypes.RESET_CART,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: authTypes.LOGOUT_FAILURE,
        payload: {
          error: error.response.data.error,
        },
      });
    });
};
