import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetUserBuildingData {
  level: number;
  maxResourceLevel: number;
  count: number;
  generation: number;
  building: {
    id: number;
    label: string;
  };
}

interface GetUserResourceData {
  id: number;
  count: number;
}

interface PostUpgradeBuilding {
  buildingId: number;
}

export const resourcesApi = createApi({
  tagTypes: ["resources", "buildings"],
  reducerPath: "resourcesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3332/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getResources: builder.query<GetUserResourceData[], any>({
      query: () => "/resources",
      providesTags: ["resources"],
    }),
    getBuildings: builder.query<GetUserBuildingData[], any>({
      query: () => "/buildings",
      providesTags: ["buildings"],
    }),
    postUpgradeBuilding: builder.mutation<PostUpgradeBuilding, any>({
      query: ({ id }) => ({
        url: `/userBuilding/${id}/levelup/`,
        method: "POST",
      }),
      invalidatesTags: ["resources"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetResourcesQuery, useGetBuildingsQuery } = resourcesApi;
