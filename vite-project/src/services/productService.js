import { createApi } from "@reduxjs/toolkit/query/react";
import { __baseQuery } from "./__baseQuery";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: __baseQuery(),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => "/products",
    }),
  }),
});

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

export const { useGetProductListQuery, useLazyGetProductListQuery } =
  productApi;
