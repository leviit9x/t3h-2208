import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../services";

const initialState = {
  products: [],
  loading: false,
};

export const productSlide = createSlice({
  // => create reducer
  initialState, // => instate cua pure function reducer
  name: "product", // => key cua reducer day trong store
  reducers: {
    setProductList(state, { payload }) {
      // tuong duong voi 1 case trong switch case reducer
      state.products = payload; // library immer
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProductList.matchPending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      productApi.endpoints.getProductList.matchFulfilled,
      (state, action) => {
        state.products = action.payload;
      }
    );
  },
}); // => create reducer cho minh

export const { setProductList } = productSlide.actions; // muc dich: dispatch

export default productSlide.reducer; // muc dich: register reducer trong store
