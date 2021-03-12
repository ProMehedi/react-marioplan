import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { projectReducer } from './reducers/projectReducer'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import { getFirestore, firestoreReducer } from 'redux-firestore'

const rootreducer = combineReducers({
  projects: projectReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

const store = createStore(
  rootreducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
  )
)

export default store
