import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetResourcesData {
  id: number,
  level: number,
  count: number,
  generation: number,
  building: {
    id: number,
    label: string
  }
}

export const resourcesApi = createApi({
  tagTypes: ["resources"],
  reducerPath: "resourcesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3332/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getResources: builder.query<GetResourcesData[], any>({
      query: () => "/resources",
      providesTags: ["resources"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetResourcesQuery } = resourcesApi;
