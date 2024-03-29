import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar, ArticleDetail, CreateArticle, EditArticle } from './components';
import { useEffect } from 'react';
import { GetItem } from './components/get-user/preset-storage';
import AuthorInfo from './components/service/axios';
import { useDispatch } from 'react-redux';
import { userEnterSuccess } from './components/slices/author';
import GetArticles from './components/service/get-articles';
import { getArticleFailure, getArticleStart, getArticleSuccess } from './components/slices/article';

function App() {
  const dispatch = useDispatch()
  const getUser = async () =>{
      try {
        const responce = await AuthorInfo.getUser() 
        dispatch(userEnterSuccess(responce))
      } catch (error) {
        console.log(`Get user error ${error}`);
      }
  }
  const getarticle = async () =>{
    dispatch(getArticleStart())
    try {
      const response = await GetArticles.getArticles() 
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      dispatch(getArticleFailure(error))
    }
  } 

  useEffect( () => {
    const token = GetItem('token')
    if (token) {
      getUser()
      getarticle()
    }  
  },[]);
  
  return (
    <div >
      <Navbar/>
      <div className='container'>
        <Routes>
            <Route path={'/info-store'} element={<Main />}/>
            <Route path={'/info-store/login'} element={<Login/>}/>
            <Route path={'/info-store/register'} element={<Register/>}/>
            <Route path={'/info-store/articles/:slug'} element={<ArticleDetail/>}/>
            <Route path={'/info-store/create-article'} element={<CreateArticle/>}/>
            <Route path={'/info-store/edit-article/:slug'} element={<EditArticle/>}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
 