import { configureStore } from '@reduxjs/toolkit'
import AuthorReducer from '../slices/author'
import ArticleReducer from '../slices/article'

export default configureStore({
  reducer: {
    author: AuthorReducer,
    article: ArticleReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})