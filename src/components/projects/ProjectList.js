import React from 'react'
import { Link } from 'react-router-dom'

const ProjectList = () => {
  return (
    <div className='project-list section'>
      <div className='card hoverable purple darken-2 project-summary'>
        <div className='card-content white-text'>
          <span className='card-title'>Project Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
          <br />
          <p>Posted by Mehedi</p>
          <p className='grey-text'>3rd September, 2pm</p>
        </div>
        <div class='card-action'>
          <Link>Read More</Link>
        </div>
      </div>
      <div className='card hoverable purple darken-2 project-summary'>
        <div className='card-content white-text'>
          <span className='card-title'>Project Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
          <br />
          <p>Posted by Mehedi</p>
          <p className='grey-text'>3rd September, 2pm</p>
        </div>
        <div class='card-action'>
          <Link>Read More</Link>
        </div>
      </div>
      <div className='card hoverable purple darken-2 project-summary'>
        <div className='card-content white-text'>
          <span className='card-title'>Project Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
          <br />
          <p>Posted by Mehedi</p>
          <p className='grey-text'>3rd September, 2pm</p>
        </div>
        <div class='card-action'>
          <Link>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
