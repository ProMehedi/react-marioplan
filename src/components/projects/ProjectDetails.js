import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { SyncLoader } from 'react-spinners'

const ProjectDetails = ({ match }) => {
  useFirestoreConnect(() => [
    { collection: 'projects', doc: match.params.id }, // or `todos/${props.todoId}`
  ])
  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[match.params.id]
  )

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
              <span className='grey-text right'>
                {project.createdAt.seconds}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
