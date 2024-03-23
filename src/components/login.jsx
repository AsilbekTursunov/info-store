import React, { useEffect, useState } from 'react'
import { icon} from './constants/constants'
import { Input } from './constants/ui'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { userEnterFailure, userEnterStart, userEnterSuccess} from './slices/author'
import Validation from './validation'
import AuthorInfo from './service/axios'
import { useNavigate } from 'react-router-dom'

const Login = () => { 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const dispatch = useDispatch( )
  const navigate = useNavigate()
   
  const {isLoading, error, isLogin} = useSelector(state => state.author)
  useEffect(()=>{
    if(isLogin){
      navigate('/info-store')
    }
  } ,[isLogin]) 
  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    dispatch(userEnterStart())
    const user = {email, password}  
    try {
      const response =  await AuthorInfo.userLogin(user)
      dispatch(userEnterSuccess(response))
    } catch (error) {  
      dispatch(userEnterFailure(error.response.data.errors))  
    }
  }
  
  return (
    <div>
      <Typography className={`d-block form-signin  m-auto text-center`} component={'span'}  width={{xs:'75%', sm:'50%', md:'25%'}}>
        <form>
          <img className="mb-4" src={icon} alt="" width={100} />
            <span className="h3 mb-3 fw-normal d-block">LogIn</span>
            {error ? <Validation error ={error}/> : null}
            <Input  label={'Email address'} type={'email'} state={email} setState={setEmail}/> 
            <Input  label={'Password'} type={'password'} state={password} setState={setPassword}/> 
            <button className="btn btn-primary w-100 py-2" type="submit" onClick={onSubmitHandler} disabled={error ? false : isLoading}>{error ? 'Login' : isLoading ? 'Loading' : 'Login'}</button> 
        </form>
      </Typography>
    </div>
  )
}

export default Login