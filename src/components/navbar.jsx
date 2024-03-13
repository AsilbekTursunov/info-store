import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from './constants/constants'

const Navbar = () => {
    return (
        <div>
            <header className="py-1 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <Link to={'/'} className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                            <img className=' mx-2' style={{ width: 200 }} src={logo} alt="" /> 
                    </Link>
                    <div className="  text-end">
                        <Link to={'/login'}>
                            <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button type="button" className="btn btn-primary">Register</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar