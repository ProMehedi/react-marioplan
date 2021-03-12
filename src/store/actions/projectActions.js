import { CREATE_PROJECT } from '../constants/constants'

export const createProject = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_PROJECT, project })
  }
}
