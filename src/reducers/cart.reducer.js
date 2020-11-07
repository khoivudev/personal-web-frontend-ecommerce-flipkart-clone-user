import { cartTypes } from "../actions/types";

const initialState = {
  cartItems: {
    //sample
    // 123: {
    //   _id: 123,
    //   name: "something mobiles",
    //   img: "some.jpg",
    //   price: "200",
    //   qty: 1,
    // },
  },
  updatingCart: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case cartTypes.ADD_TO_CART_REQUEST:
      return {
        ...state,
        updatingCart: true,
      };
    case cartTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false,
      };
    case cartTypes.ADD_TO_CART_FAILURE:
      return {
        ...state,
        updatingCart: false,
        error: action.payload.error,
      };
    case cartTypes.RESET_CART:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
