import { configureStore } from '@reduxjs/toolkit'
import fabric from './slice/fabric'

export const store = configureStore({
  reducer: {fabric},
})