import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetArticles from './service/get-articles'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailFailure, getDetailStart, getDetailSuccess } from './slices/article'
import { Loader } from './constants/ui'
import moment from 'moment'

const ArticleDetail = () => {
    const dispatch = useDispatch()
    const { slug } = useParams()
    const [detail, setDetail] = useState({})
    const { articleDetail, isLoading } = useSelector(state => state.article)

    useEffect(() => {
        const getDetail = async () => {
            dispatch(getDetailStart())
            try {
                const response = await GetArticles.getDetails(slug);
                setDetail(response.article)
                dispatch(getDetailSuccess(response.article))
            } catch (error) {
                dispatch(getDetailFailure())
            }
        }
        getDetail()
    }, [slug])
    return (
        articleDetail !== null && (
            <div classNameName='container'>
                {isLoading ? <Loader /> :
                    <div className="p-3 mb-4 bg-body-tertiary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
                            <p className="col-md-8 fs-5">{articleDetail.description}</p>
                        </div>
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{articleDetail.author.username}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Created at : </span>{moment(articleDetail.createdAt).format('DD, MMM, YYYY')}</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={articleDetail.author.image} className="w-100" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="row g-0">
                            <p><span className='fw-bold text-muted'>Article main body : </span>{articleDetail.body}</p>
                        </div>
                    </div>
                }
            </div>
        )
    )


}

export default ArticleDetail