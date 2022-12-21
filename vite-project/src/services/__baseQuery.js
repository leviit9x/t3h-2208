import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export function __baseQuery(feat) {
  return fetchBaseQuery({
    baseUrl: "http://localhost:8000" + feat,
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
}
