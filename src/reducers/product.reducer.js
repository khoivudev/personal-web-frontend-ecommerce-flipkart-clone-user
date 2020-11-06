import { productTypes } from "../actions/types";

const initialState = {
  products: [],
  page: {},
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
  error: null,
  loading: false,
  productDetails: {},
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
    case productTypes.GET_PRODUCT_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productTypes.GET_PRODUCT_PAGE_SUCCESS:
      return {
        ...state,
        page: action.payload.page,
        loading: false,
      };
    case productTypes.GET_PRODUCT_PAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        productDetails: action.payload.productDetails,
        loading: false,
      };
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
