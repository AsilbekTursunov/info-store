import { configureStore } from '@reduxjs/toolkit'
import AuthorReducer from '../slices/author'

export default configureStore({
  reducer: {
   author: AuthorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
})