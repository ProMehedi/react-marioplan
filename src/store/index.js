import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { projectReducer } from './reducers/projectReducer'

const rootreducer = combineReducers({
  projects: projectReducer,
  auth: authReducer,
})

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
