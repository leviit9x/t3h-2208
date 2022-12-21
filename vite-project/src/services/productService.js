import { createApi } from "@reduxjs/toolkit/query/react";
import { __baseQuery } from "./__baseQuery";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi", // ==> key trong root reducer
  baseQuery: __baseQuery("/products"), // inject vao trong request http://localhost:8000/products?sort=asc&name=nam
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (args) => ({ url: args }),
    }),
    createProduct: builder.mutation({
      query: (args) => ({ body: args, method: "POST" }),
    }),
  }),
});

// method GET: query params, params

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

// query
//  use[Endpoint]Query  || useLazy[Endpoint]Query
// case 1: useQuery
// { data, isSuccess, isLoading, isError }
// case 2: useLazyQuery
// [trigger, { data, isSuccess, isLoading, isError }]

// mutation
// use[Endpoint]Mutation
// [trigger, { data, isSuccess, isLoading, isError }]

export const {
  useGetProductListQuery,
  useLazyGetProductListQuery,
  useCreateProductMutation,
} = productApi;
