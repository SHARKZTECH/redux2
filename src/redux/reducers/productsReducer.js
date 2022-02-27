const initState = {
  products: []
};
const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "REQUEST_PRODUCTS":
      return { ...state, loading: true };
    case "GET_PRODUCTS":
      return { ...state, products: payload, loading: false };
    default:
      return state;
  }
};

export default productsReducer;
