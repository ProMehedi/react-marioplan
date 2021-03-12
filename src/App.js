import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <h1>Hello 3!</h1>
      </Router>
    </>
  )
}

export default App
