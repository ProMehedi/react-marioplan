import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  const { auth, profile } = useSelector((state) => state.firebase)

  return (
    <nav className='purple darken-4'>
      <div className='container'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            MARIO
            <span className='pink-text darken-5'>PLAN</span>
          </Link>
          {auth.isEmpty ? (
            <SignedOutLinks />
          ) : (
            <SignedInLinks name={profile.name} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
