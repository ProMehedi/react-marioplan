import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/constants'

export const createProject = (user) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: USER_LOGIN_REQUEST, loading: true })
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(user)
    .then(() => {
      dispatch({ type: USER_LOGIN_SUCCESS, loading: false })
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAIL, loading: false, err })
    })
}
