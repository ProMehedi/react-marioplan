import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SignUp = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { auth } = useSelector((state) => state.firebase)

  useEffect(() => {
    if (!auth.isEmpty) {
      history.push('/')
    }
  }, [history, auth])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })
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
                  Register for new account
                </h5>
                <div className='input-field'>
                  <label htmlFor='name'></label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Full Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className='input-field'>
                  <button type='submit' className='btn purple darken-4'>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
