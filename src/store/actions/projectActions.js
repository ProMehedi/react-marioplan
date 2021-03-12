import { CREATE_PROJECT } from '../constants/constants'

export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirebase().firestore()
  firestore
    .collection('projects')
    .add({
      ...project,
    })
    .then(() => {
      dispatch({ type: CREATE_PROJECT, project })
    })
    .catch((err) => {
      console.log(err)
    })
}
