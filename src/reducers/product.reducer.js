import { productTypes } from "../actions/types";

const initialState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
        loading: false,
      };

    case productTypes.GET_PRODUCTS_BY_CATEGORY_SLUG_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
