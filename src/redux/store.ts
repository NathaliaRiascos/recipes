import { configureStore } from '@reduxjs/toolkit'

import { recipesApi } from '@/services/recipesApi'

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
})


export default store