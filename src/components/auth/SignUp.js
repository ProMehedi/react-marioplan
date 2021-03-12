import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import { userSignUp } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'

const SignUp = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const { loading, setError } = useSelector((state) => state.auth)
  const { auth } = useSelector((state) => state.firebase)

  useEffect(() => {
    if (!auth.isEmpty) {
      history.push('/')
    }
    if (setError) {
      toast.error(setError)
    }
  }, [history, auth, setError])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userSignUp({ name, email, password }))
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
                <div className='input-field valign-wrapper'>
                  <button type='submit' className='btn purple darken-4 mr-3'>
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{' '}
                    <Link to='/signin'>Signin Now</Link>
                  </p>
                  {loading && <MoonLoader size={20} color='red' />}
                </div>
                {setError && <p className='red-text darken-3'>{setError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
