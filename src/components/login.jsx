import React, { useState } from 'react'
import { icon} from './constants/constants'
import { Input } from './constants/ui'

const Login = () => {
  const [state, setState] = useState({
    email:'',
    password:''
  })
  return (
    <div>
      <main class="form-signin w-25 m-auto text-center">
        <form>
          <img class="mb-4" src={icon} alt="" width={100} />
            <h1 class="h3 mb-3 fw-normal">Login In</h1>
            <Input  label={'Email address'} type={'email'} state={state.email} setState={setState}/> 
            <Input  label={'Password'} type={'password'} state={state.password} setState={setState}/>

            {/* <div class="form-check text-start my-3">
              <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
            </div> */}
            <button class="btn btn-primary w-100 py-2" type="submit">Login</button> 
        </form>
      </main>
    </div>
  )
}

export default Login