import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import { createProject } from '../../store/actions/projectActions'

const CreateProject = ({ history }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const { loading } = useSelector((state) => state.projects)
  const { auth } = useSelector((state) => state.firebase)

  useEffect(() => {
    if (auth.isEmpty) {
      history.push('/signin')
    }
  }, [history, auth])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProject({
        title,
        content,
        authorName: 'Mehedi Hasan',
        authorId: 1465,
        createdAt: new Date(),
      })
    )
    history.push('/dashboard')
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
                <div className='input-field valign-wrapper'>
                  <button type='submit' className='btn purple darken-4 mr-3'>
                    Create
                  </button>
                  {loading && <MoonLoader size={20} color='red' />}
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
