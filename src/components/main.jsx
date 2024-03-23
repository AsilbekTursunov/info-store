import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleStart, getArticleLogout, getArticleLogin, getArticleSuccess, getArticleFailure } from './slices/article'
import {Loader}  from '../components/constants/ui/'
import GetArticles from './service/get-articles'
import { useNavigate } from 'react-router-dom'

const Main = () => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const author  = useSelector(state => state.author) 
  const {isLogin, article, isLoading}  = useSelector(state => state.article)  

  const getarticle = async () =>{
    dispatch(getArticleStart())
    try {
      const response = await GetArticles.getArticles() 
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      dispatch(getArticleFailure(error))
    }
  }
  useEffect(()=>{
    getarticle()
  },[]) 

  const articleDelete = async (slug) =>{
    try {
      await GetArticles.deleteArticle(slug) 
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  } 
  return (
    <div classNameName='container'>
      {isLoading ? <Loader/> :  
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {article !== null ? article.map(item => (
          <div className="col" key={item.favoritesCount}>
            <div className="card shadow-sm h-100">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-success" onClick={()=> navigate(`/articles/${item.slug}`)} >View</button>
                    {author.isLogin && author.user.user.username === item.author.username && <>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=> navigate(`/edit-article/${item.slug}`)}>Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>articleDelete(item.slug)}>Delete</button>
                    </>}
                  </div>
                  <small className="text-body-secondary">{item.author.username !== null ?  item.author.username : ''}</small>
                </div>
              </div>
            </div>
          </div>
        )) : ''} 
      </div>    
      }
    </div>
  )
}

export default Main