import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number>({
      query: (offset) => `products?offset=${offset}&limit=10`,
      keepUnusedDataFor: 300,
      providesTags: (result, _, offset) =>
        result
          ? [
              ...result.map((product) => ({
                type: "Products" as const,
                id: product.id,
              })),
              { type: "Products", id: `PAGE_${offset}` },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
});

export const { useGetProductsQuery } = apiSlice;
