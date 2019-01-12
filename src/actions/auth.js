import {firebase, googleProvider} from '../firebase/firebase'

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleProvider)

  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
