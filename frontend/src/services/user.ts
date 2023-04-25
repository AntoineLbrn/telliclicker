import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginBody {
  username: string;
  password: string;
}

export const userApi = createApi({
  tagTypes: ["user"],
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3332/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginBody) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['user'],
    }),
    getUser: builder.query({
      query: () => "",
      providesTags: ["user"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetUserQuery } = userApi;
