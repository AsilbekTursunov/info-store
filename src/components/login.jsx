import React, { useState } from 'react'
import { icon} from './constants/constants'
import { Input } from './constants/ui'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart } from './slices/author'

const Login = () => {
  const [state, setState] = useState({
    email:'',
    password:''
  })
  const dispatch = useDispatch( )
  const {isLoading} = useSelector(state => state.author)
  console.log(isLoading); 
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(loginStart())
  }
  return (
    <div>
      <Typography className={`form-signin  m-auto text-center`}   width={{xs:'75%', sm:'50%', md:'25%'}}>
        <form>
          <img className="mb-4" src={icon} alt="" width={100} />
            <span className="h3 mb-3 fw-normal d-block">Login In</span>
            <Input  label={'Email address'} type={'email'} state={state.email} setState={setState}/> 
            <Input  label={'Password'} type={'password'} state={state.password} setState={setState}/> 
            <button className="btn btn-primary w-100 py-2" type="submit" onClick={onSubmitHandler} disabled={isLoading}>{isLoading ? 'Loading' :'Login'}</button> 
        </form>
      </Typography>
    </div>
  )
}

export default Login