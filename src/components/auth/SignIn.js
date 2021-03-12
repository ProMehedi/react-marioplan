import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import { userLogin } from '../../store/actions/authActions'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLogin({ email, password }))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <br />
          <div className='card'>
            <div className='card-content'>
              <form className='white' onSubmit={submitHandler}>
                <h5 className='grey-text text-darken-3'>
                  Login to your account
                </h5>
                <div className='input-field'>
                  <label htmlFor='email'></label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email Address'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='input-field'>
                  <label htmlFor='password'></label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='input-field valign-wrapper'>
                  <button type='submit' className='btn purple darken-4 mr-3'>
                    Sign In
                  </button>
                  {loading && <MoonLoader size={20} color='red' />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
