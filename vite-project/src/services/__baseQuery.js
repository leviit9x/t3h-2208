import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export function __baseQuery() {
  return fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
}
