import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const amazonCore = createApi({
  reducerPath: "amazonCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_AMAZON_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBestDeals: builder.query({
      query: () =>
        "/deals-v2?country=IN&min_product_star_rating=ALL&price_range=ALL&discount_range=ALL",
    }),
    getBestSellers: builder.query({
      query: (category) =>
        `/best-sellers?category=${category}&type=BEST_SELLERS&page=1&country=IN`,
    }),
    getProductDetails: builder.query({
      query: (productId) => `/product-details?asin=${productId}&country=IN`,
    }),
    getData: builder.query({
      query: (queryString) =>
        `/search?query=${queryString}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false`,
    }),
  }),
});

export const {
  useGetBestDealsQuery,
  useGetBestSellersQuery,
  useGetProductDetailsQuery,
  useGetDataQuery,
} = amazonCore;
