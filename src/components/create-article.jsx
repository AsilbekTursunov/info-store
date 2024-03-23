import React, { useState } from 'react'
import { ContentForm } from './'
import GetArticles from './service/get-articles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from './slices/article'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const art = useSelector(state=> state.article)

    const formhandler = async (e) => {
        e.preventDefault()
        const article = { title, description, body }
        
        dispatch(postArticleStart()) 
        try {
            const response = await GetArticles.postArticle(article)   
            dispatch(postArticleSuccess())     
            navigate('/info-store')
        } catch (error) {
            dispatch(postArticleFailure())  
        }
    }

    const formArticle = { title, description, body, setTitle, setDiscription, setBody, formhandler }

    return (
        <div>
            <h1 className='text-center fw-600'>Create Article</h1>
            <div>
                <ContentForm  {...formArticle}   name={'Create article'}/>
            </div>
        </div>
    )
}

export default CreateArticle