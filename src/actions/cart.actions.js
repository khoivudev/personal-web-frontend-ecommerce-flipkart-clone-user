import { cartTypes } from "./types";
import store from "../store";

export const addToCart = (product, newQty = 1) => (dispatch) => {
  //if newQty=1 add one item to cart
  //if newQty= -1 delete one item from cart
  const { cartItems } = store.getState().cart;
  const qty = cartItems[product._id]
    ? parseInt(cartItems[product._id].qty + newQty)
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
