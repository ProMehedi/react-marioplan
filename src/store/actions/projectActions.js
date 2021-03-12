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
  dispatch({ type: CREATE_PROJECT_REQUEST, loading: true })
  const firestore = getFirebase().firestore()
  firestore
    .collection('projects')
    .add({
      ...project,
    })
    .then(() => {
      dispatch({ type: CREATE_PROJECT_SUCCESS, project, loading: false })
    })
    .catch((err) => {
      dispatch({ type: CREATE_PROJECT_FAIL, err, loading: false })
    })
}
