import {firebase, googleProvider} from '../firebase/firebase'

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleProvider)

  }
}
