import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul id='nav-mobile' className='right hide-on-med-and-down'>
      <li>
        <Link to='/create'>New Project</Link>
      </li>
      <li>
        <Link to='/logout'>Logout</Link>
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
