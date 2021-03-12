import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/constants'

export const userLogin = ({ email, password }) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: USER_LOGIN_REQUEST, loading: true })
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user, loading: false })
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAIL, loading: false, err })
    })
}
