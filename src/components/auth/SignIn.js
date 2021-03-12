import React, { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <form className='white' onSubmit={submitHandler}>
            <h5 className='grey-text text-darken-3'>Sign In</h5>
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
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
