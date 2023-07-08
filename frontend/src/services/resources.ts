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

interface PostBuyUnit {
  unitId: number;
}

interface postChallengeEnnemy {
  ennemyId: number;
}

interface UnitStock {
  id: number;
  quantity: number;
  type: UnitType;
}

interface UnitType {
  id: number;
  label: number;
}

interface LoginBody {
  username: string;
  password: string;
}

export interface GetUserData {
  id: BigInteger;
  username: string;
  level: number;
  units: number;
  maxUnits: number;
  ennemiesBeaten: number[];
}

export const resourcesApi = createApi({
  tagTypes: ["resources", "buildings", "caserne", "user"],
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
    postUpgradeBuildingProduction: builder.mutation<PostUpgradeBuilding, any>({
      query: ({ buildingId }) => ({
        url: `/building/${buildingId + 1}/production/upgrade`,
        method: "POST",
      }),
      invalidatesTags: ["buildings", "resources"],
    }),
    postUpgradeBuildingCapacity: builder.mutation<PostUpgradeBuilding, any>({
      query: ({ buildingId }) => ({
        url: `/building/${buildingId + 1}/capacity/upgrade`,
        method: "POST",
      }),
      invalidatesTags: ["buildings", "resources"],
    }),
    postBuyUnit: builder.mutation<PostBuyUnit, any>({
      query: ({ unitId }) => ({
        url: `/caserne/buy/${unitId}`,
        method: "POST",
      }),
      invalidatesTags: ["caserne", "resources", "user"],
    }),
    getUnits: builder.query<UnitStock[], any>({
      query: () => "/caserne",
      providesTags: ["caserne"],
    }),
    login: builder.mutation({
      query: (body: LoginBody) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    signIn: builder.mutation({
      query: (body: LoginBody) => ({
        url: `/signin`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: builder.query<GetUserData, any>({
      query: () => "",
      providesTags: ["user"],
    }),
    postUpgradeMairie: builder.mutation({
      query: () => ({
        url: `/user/upgrade`,
        method: "POST",
      }),
      invalidatesTags: ["user", 'resources'],
    }),
    postChallengeEnnemy: builder.mutation<postChallengeEnnemy, any>({
      query: ({ ennemyId }) => ({
        url: `/user/challenge/${ennemyId}`,
        method: "POST",
      }),
      invalidatesTags: ["caserne", "user"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetResourcesQuery,
  useGetBuildingsQuery,
  usePostUpgradeBuildingProductionMutation,
  usePostUpgradeBuildingCapacityMutation,
  usePostBuyUnitMutation,
  useGetUnitsQuery,
  useLoginMutation,
  useGetUserQuery,
  useSignInMutation,
  usePostUpgradeMairieMutation,
  usePostChallengeEnnemyMutation
} = resourcesApi;
