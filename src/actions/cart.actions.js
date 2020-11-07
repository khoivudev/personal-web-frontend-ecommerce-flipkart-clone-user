import { cartTypes } from "./types";
import store from "../store";

export const addToCart = (product) => (dispatch) => {
  const { cartItems } = store.getState().cart;
  const qty = cartItems[product._id]
    ? parseInt(cartItems[product._id].qty + 1)
    : 1;
  cartItems[product._id] = {
    ...product,
    qty,
  };

  localStorage.setItem("cart", JSON.stringify(cartItems));
  dispatch({
    type: cartTypes.ADD_TO_CART,
    payload: { cartItems },
  });
};

export const updateCart = () => (dispatch) => {
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  if (cartItems) {
    dispatch({
      type: cartTypes.ADD_TO_CART,
      payload: { cartItems },
    });
  }
};
