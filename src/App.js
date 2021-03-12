import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/projects/ProjectDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/project/:id' component={ProjectDetails} />
        </Switch>
      </Router>
    </>
  )
}

export default App
