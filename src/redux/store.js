import { configureStore } from '@reduxjs/toolkit'
import fabric from './slice/fabric'
import customer from './slice/customer'

export const store = configureStore({
  reducer: {fabric,customer},
})