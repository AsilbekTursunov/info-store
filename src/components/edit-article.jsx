import GetArticles from './service/get-articles'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailFailure, getDetailStart, getDetailSuccess } from './slices/article' 
import ContentForm from './content-form'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postArticleFailure, postArticleStart, postArticleSuccess } from './slices/article'

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const { slug } = useParams()  


    const changeform = async (e) => {
        e.preventDefault()
        const article = { title, description, body } 
        dispatch(postArticleStart()) 
        try {
            await GetArticles.putArticle(slug, article)  
            dispatch(postArticleSuccess())  
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())  
        }
    }

    useEffect(() => {
        const getDetail = async () => {
            dispatch(getDetailStart())
            try {
                const response = await GetArticles.getDetails(slug);
                setTitle(response.article.title)
                setDiscription(response.article.description)
                setBody(response.article.body)
                dispatch(getDetailSuccess(response.article))
            } catch (error) {
                dispatch(getDetailFailure())
            }
        }
        getDetail()
    }, [slug])
    const formArticle = { title, description, body, setTitle, setDiscription, setBody, changeform }
    return (
        <div>
            <h1 className='text-center fw-600'>Edit Article</h1>
            <div>
                <ContentForm  {...formArticle} name={'Edit article'} />
            </div>
        </div>
    )
}

export default EditArticle