export * from "./productService";

import { productApi } from "./productService";

export const mergeReducerService = {
  [productApi.reducerPath]: productApi.reducer,
};
