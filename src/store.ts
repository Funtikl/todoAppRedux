import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import todoReducer from './features/inboxSlice.js'
export const store = configureStore({
  reducer: {
    todo:todoReducer
  },

})
