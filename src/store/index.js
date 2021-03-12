import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducers/authReducer'
import { projectReducer } from './reducers/projectReducer'

const rootreducer = combineReducers({
  projects: projectReducer,
  auth: authReducer,
})

const store = createStore(rootreducer, composeWithDevTools())

export default store
