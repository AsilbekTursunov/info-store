import React, { useState } from 'react' 
import { icon} from './constants/constants'
import { Input } from './constants/ui'
import { Typography } from '@mui/material'

const Register = () => {
  const [state, setState] = useState({
    name:'',
    email:'',
    password:''
  })
  return (
    <div>
      <Typography className={`form-signin  m-auto text-center`}   width={{xs:'75%', sm:'50%', md:'25%'}}>
        <form>
          <img className="mb-4" src={icon} alt="" width={100} />
            <span className="h3 mb-3 fw-normal d-block">Registor</span>
            <Input  label={'Username'} type={'text'} state={state.name} setState={setState}/> 
            <Input  label={'Email address'} type={'email'} state={state.name} setState={setState}/> 
            <Input  label={'Password'} type={'password'} state={state.password} setState={setState}/> 
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Registor</button> 
        </form>
      </Typography>
    </div>
  )
}

export default Register