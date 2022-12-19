import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

export const productSlide = createSlice({
  initialState,
  name: "Product",
  reducers: {
    setProductList(state, { payload }) {
      state.products = payload;
      state.loading = false;
    },
  },
});

export const { setProductList } = productSlide.actions;

export default productSlide.reducer;
