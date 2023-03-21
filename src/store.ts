import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/inboxSlice'
export const store = configureStore({
  reducer: {
    todo:todoReducer
  },

})

export type todoReducer = ReturnType<typeof store.getState>