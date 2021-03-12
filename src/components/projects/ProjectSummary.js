import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ProjectSummary = ({ project }) => {
  const momentDate = moment(project.createdAt.toDate()).calendar()
  return (
    <div className='card project-summary'>
      <div className='card-content white-grey'>
        <span className='card-title'>{project.title}</span>
        <p>{project.content}</p>
        <br />
        <p>Posted by {project.authorName}</p>
        <p className='grey-text'>{momentDate}</p>
      </div>
      <div className='card-action'>
        <Link to={`/project/${project.id}`}>Read More</Link>
      </div>
    </div>
  )
}

export default ProjectSummary
