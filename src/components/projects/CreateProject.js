import React, { useState } from 'react'

const CreateProject = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ title, content })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <br />
          <div className='card'>
            <div className='card-content'>
              <form className='white' onSubmit={submitHandler}>
                <h5 className='grey-text text-darken-3'>Create new proejct</h5>
                <div className='input-field'>
                  <label htmlFor='title'></label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Project Title'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className='input-field'>
                  <label htmlFor='content'></label>
                  <textarea
                    type='text'
                    name='email'
                    className='materialize-textarea'
                    id='email'
                    placeholder='Project Description'
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <div className='input-field'>
                  <button type='submit' className='btn purple darken-4'>
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject
