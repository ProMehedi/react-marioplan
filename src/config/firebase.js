import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyAfIbAa41c35T2VA557MpIfWY8j5EQJexg',
  authDomain: 'react-marioplan-5d6d6.firebaseapp.com',
  projectId: 'react-marioplan-5d6d6',
  storageBucket: 'react-marioplan-5d6d6.appspot.com',
  messagingSenderId: '1021206475788',
  appId: '1:1021206475788:web:161b843fa3a9b01beeaa29',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
