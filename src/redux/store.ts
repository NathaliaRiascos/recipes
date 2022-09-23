import { configureStore } from '@reduxjs/toolkit'
import { recipesSlice } from './features'

export interface AppStore {}

const store= configureStore<AppStore>({
  reducer: {
    recipes: recipesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store