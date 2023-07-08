import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import LoginReducer from '../features/login/LoginSlice'
import { rtkQueryErrorLogger } from '../services/middlewares'
import { resourcesApi } from '../services/resources'

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(resourcesApi.middleware).concat(rtkQueryErrorLogger),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
