import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from '../constants/constants'

const initialState = {
  setError: null,
  loading: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true }

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, login: true }

    case USER_LOGIN_FAIL:
      return { ...state, setError: action.error, loading: false }

    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true }

    case USER_LOGOUT_SUCCESS:
      return { ...state, loading: false, login: false, setError: null }

    default:
      return state
  }
}
