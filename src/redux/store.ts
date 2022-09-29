import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { recipesSlice } from './features'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  recipes: recipesSlice.reducer,
})

export type RootReducer = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer<RootReducer, AnyAction>(
  persistConfig,
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk)
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store