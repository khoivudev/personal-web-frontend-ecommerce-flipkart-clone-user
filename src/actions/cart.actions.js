import { cartTypes } from "./types";
import store from "../store";
import axios from "../helpers/axios";

const getCartItems = () => (dispatch) => {
  dispatch({ type: cartTypes.ADD_TO_CART_REQUEST });
  axios
    .get("/user/cart/getCartItems")
    .then((res) => {
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartTypes.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    })
    .catch((error) => console.log(error));
};

export const addToCart = (product, newQty = 1) => (dispatch) => {
  //if newQty=1 add one item to cart
  //if newQty= -1 delete one item from cart
  const {
    cart: { cartItems },
    auth,
  } = store.getState();
  const qty = cartItems[product._id]
    ? parseInt(cartItems[product._id].qty + newQty)
    : 1;
  cartItems[product._id] = {
    ...product,
    qty,
  };
  if (auth.authenticate) {
    dispatch({ type: cartTypes.ADD_TO_CART_REQUEST });
    const payload = {
      cartItems: [
        {
          product: product._id,
          quantity: qty,
        },
      ],
    };
    console.log(payload);
    axios
      .post("/user/cart/addtocart", payload)
      .then((res) => {
        if (res.status === 200) {
          dispatch(getCartItems());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  console.log("addToCart::", cartItems);
  dispatch({
    type: cartTypes.ADD_TO_CART_SUCCESS,
    payload: { cartItems },
  });
};

export const updateCart = () => (dispatch) => {
  const { auth } = store.getState();
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  if (auth.authenticate) {
    localStorage.removeItem("cart");
    if (cartItems) {
      const payload = {
        cartItems: Object.keys(cartItems).map((key, index) => {
          return {
            quantity: cartItems[key].qty,
            product: cartItems[key]._id,
          };
        }),
      };
      if (Object.keys(cartItems).length > 0) {
        axios
          .post("/user/cart/addtocart", payload)
          .then((res) => {
            if (res.status === 200) {
              dispatch(getCartItems());
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  } else {
    if (cartItems) {
      dispatch({
        type: cartTypes.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
    }
  }
};

export { getCartItems };
