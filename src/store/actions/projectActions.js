import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
} from '../constants/constants'

export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  dispatch({ type: CREATE_PROJECT_REQUEST })
  const firestore = getFirebase().firestore()
  firestore
    .collection('projects')
    .add({
      ...project,
    })
    .then(() => {
      dispatch({ type: CREATE_PROJECT_SUCCESS, project })
    })
    .catch((err) => {
      dispatch({ type: CREATE_PROJECT_FAIL, error: err.message })
    })
}
