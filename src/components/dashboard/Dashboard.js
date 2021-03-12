import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

const Dashboard = () => {
  const { projects } = useSelector((state) => state.projects)

  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m7'>
          <ProjectList projects={projects} />
        </div>
        <div className='col s12 m5'>
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
