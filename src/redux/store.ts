import { configureStore } from '@reduxjs/toolkit'

import { recipesSlice } from './features'

export const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer
  }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store