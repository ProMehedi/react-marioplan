import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { projectReducer } from './reducers/projectReducer'

const rootreducer = combineReducers({
  projects: projectReducer,
  auth: authReducer,
})

const store = createStore(rootreducer)

export default store
