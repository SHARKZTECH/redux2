export const getAllProducts = (products) => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_PRODUCTS" });

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
};
