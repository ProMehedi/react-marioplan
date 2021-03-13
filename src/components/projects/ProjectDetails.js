import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useFirestoreConnect } from 'react-redux-firebase'
import { SyncLoader } from 'react-spinners'

const ProjectDetails = ({ match, history }) => {
  useFirestoreConnect(() => [{ collection: 'projects', doc: match.params.id }])
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[match.params.id]
  )

  const { auth } = useSelector((state) => state.firebase)
  const momentDate = moment(project.createdAt.toDate()).calendar()

  useEffect(() => {
    if (auth.isEmpty) {
      history.push('/signin')
    }
  }, [history, auth])

  if (!project) {
    return (
      <div className='loaderWrapper valign-wrapper center-align'>
        <h4 style={{ marginBottom: 30 }}>Loading Content...</h4>
        <SyncLoader size={20} color='red' />
      </div>
    )
  }

  return (
    <div className='container section project-details'>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <div className='card project-summary'>
            <div className='card-content grey-text'>
              <span className='card-title'>{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className='card-action'>
              <span className='grey-text'>Posted by {project.authorName}</span>
              <span className='grey-text right'>{momentDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
