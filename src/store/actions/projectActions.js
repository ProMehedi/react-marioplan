import { CREATE_PROJECT } from '../constants/constants'

export const createProject = (project) => (dispatch, getState) => {
  dispatch({ type: CREATE_PROJECT, project })
}
