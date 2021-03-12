import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useFirestoreConnect } from 'react-redux-firebase'
import { SyncLoader } from 'react-spinners'

const Dashboard = () => {
  // Sync Data from Firebase
  const projects = useSelector((state) => state.firestore.ordered.projects)
  useFirestoreConnect([{ collection: 'projects' }])

  if (!projects) {
    return (
      <div className='loaderWrapper valign-wrapper center-align'>
        <h4 style={{ marginBottom: 30 }}>Loading Content...</h4>
        <SyncLoader size={20} color='red' />
      </div>
    )
  }

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
