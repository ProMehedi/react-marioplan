import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../store/actions/authActions'

const SignedInLinks = () => {
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userLogout())
  }
  return (
    <ul id='nav-mobile' className='right hide-on-med-and-down'>
      <li>
        <Link to='/create'>New Project</Link>
      </li>
      <li>
        <a href='/' onClick={logoutHandler}>
          Logout
        </a>
      </li>
      <li>
        <Link to='/dashboard' className='btn btn-floating pink lighten-1'>
          NN
        </Link>
      </li>
    </ul>
  )
}

export default SignedInLinks
