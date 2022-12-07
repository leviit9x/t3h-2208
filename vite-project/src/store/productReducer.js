const initial = {
  productList: [],
};

export function productReducer(state = initial, action) {
  switch (action.type) {
    case "product/setProductList":
      return { ...state, user: action.payload };
    default:
      return Object.assign({}, state);
  }
}
