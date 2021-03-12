import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from '../constants/constants'

export const userLogin = ({ email, password }) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: USER_LOGIN_REQUEST })
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

export const userSignUp = ({ name, email, password }) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase()
  const firestore = getFirestore()

  dispatch({ type: USER_SIGNUP_REQUEST })

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((newUser) => {
      return firestore.collection('users').doc(newUser.user.uid).set({ name })
    })
    .then(() => {
      dispatch({ type: USER_SIGNUP_SUCCESS })
    })
    .catch((err) => {
      dispatch({ type: USER_SIGNUP_FAIL, error: err.message })
    })
}
