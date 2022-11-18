import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { recipesSlice } from './features'

export const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer
  }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store