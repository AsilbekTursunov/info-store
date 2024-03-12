import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from './constants/constants'

const Navbar = () => {
    return (
        <div>
            <header class="py-3 mb-4 border-bottom">
                <div class="container d-flex flex-wrap justify-content-between align-items-center">
                    <Link to={'/'}>
                        <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none" >
                            <img className=' mx-2' style={{ width: 200 }} src={logo} alt="" />
                        </a>
                    </Link>
                    <div class="  text-end">
                        <Link to={'/login'}>
                            <button type="button" class="btn btn-outline-primary me-2">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button type="button" class="btn btn-primary">Register</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar