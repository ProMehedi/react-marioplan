import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/constants'

const initialState = {
  setError: null,
  loading: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: action.loading }

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      }

    case USER_LOGIN_FAIL:
      return { ...state, setError: action.err, loading: action.loading }

    default:
      return state
  }
}
