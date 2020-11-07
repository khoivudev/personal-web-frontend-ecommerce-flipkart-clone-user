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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    default:
      return state;
  }
}
