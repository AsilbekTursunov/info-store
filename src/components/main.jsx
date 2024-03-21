import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleStart, getArticleLogout } from './slices/article'

const Main = () => {
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch()
  const author  = useSelector(state => state.author) 
  const {isLoading, article}  = useSelector(state => state.article) 
  if (author.isLogin) {
    dispatch(getArticleStart())
  } else{
    dispatch(getArticleLogout())
  }
  return (
    <div className='container'>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {article.map(item => (
          <div class="col" key={item.favoritesCount}>
            <div class="card shadow-sm h-100">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
              <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-text">{item.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-success">View</button>
                    {isLoading ? <>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                    </> : ''}
                  </div>
                  <small class="text-body-secondary">{item.author.username}</small>
                </div>
              </div>
            </div>
          </div>
        ))} 
      </div>    
    </div>
  )
}

export default Main