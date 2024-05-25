import { configureStore } from '@reduxjs/toolkit'
import sortGamesSlice from './slices/sortGamesSlice'
import shopSlice from './slices/shop'

export const store = configureStore({
  reducer: { sortGames: sortGamesSlice, shop: shopSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
