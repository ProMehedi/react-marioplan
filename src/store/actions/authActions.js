import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
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
      dispatch({ type: USER_LOGIN_FAIL, loading: false, error: err.message })
    })
}

export const userLogout = () => (dispatch, getState, { getFirebase }) => {
  dispatch({ type: USER_LOGOUT_REQUEST })
  const firebase = getFirebase()

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: USER_LOGOUT_SUCCESS })
    })
}
