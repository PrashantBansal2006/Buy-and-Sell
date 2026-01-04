import { configureStore } from '@reduxjs/toolkit'
import navigateReducer from './features/navigateSlice'

export const store = configureStore({
  reducer: {
    navigator:navigateReducer,
  },
})