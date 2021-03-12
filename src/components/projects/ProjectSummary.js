import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({ project }) => {
  return (
    <div className='card project-summary'>
      <div className='card-content white-grey'>
        <span className='card-title'>{project.title}</span>
        <p>{project.content}</p>
        <br />
        <p>Posted by Mehedi</p>
        <p className='grey-text'>3rd September, 2pm</p>
      </div>
      <div className='card-action'>
        <Link to='/project/5'>Read More</Link>
      </div>
    </div>
  )
}

export default ProjectSummary
