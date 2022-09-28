import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import { recipesSlice } from './features'
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducers = combineReducers({
  recipes: recipesSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)
const store= configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store