import React from 'react'
import Avatar from 'react-avatar'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../store/actions/authActions'

const SignedInLinks = ({ name }) => {
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(userLogout())
    toast.success('User Logout!')
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
        <Link to='/dashboard'>
          <Avatar
            name={name ? name : '♡'}
            round
            size='40'
            textSizeRatio={1.5}
          />
        </Link>
      </li>
    </ul>
  )
}

export default SignedInLinks
