import { apiSlice } from "../api/apiSilce";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: 'get-orders', // Corrected the URL quote
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersApi; // Corrected the query name
