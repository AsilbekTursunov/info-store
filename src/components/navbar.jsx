import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo } from './constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from './slices/author'

const Navbar = () => {
    const { isLogin, user } = useSelector(state => state.author)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const removeToken = () => {
        dispatch(userLogout())
        navigate('login')
    }
    return (
        <div>
            <header className="py-1 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <Link to={'/'} className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <img className=' mx-2' style={{ width: 200 }} src={logo} alt="" />
                    </Link>
                    <div className="  text-end">
                        {isLogin ?
                            <div className='d-flex align-items-center'>
                                <p className='m-0 px-3'>{user.user.username}</p>
                                <Link to={'/register'}>
                                    <button type="button" className="btn btn-outline-danger me-2" onClick={removeToken}>Log Out</button>
                                </Link>
                            </div>
                            :
                            <div>
                                <Link to={'/login'}>
                                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                                </Link>
                                <Link to={'/register'}>
                                    <button type="button" className="btn btn-primary">Register</button>
                                </Link>
                            </div>}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar