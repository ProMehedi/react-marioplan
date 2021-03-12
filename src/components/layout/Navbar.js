import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return (
    <nav className='purple darken-4'>
      <div className='container'>
        <div class='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            MARIO
            <span className='pink-text darken-5'>PLAN</span>
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
