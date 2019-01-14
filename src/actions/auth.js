import {firebase, googleProvider} from '../firebase/firebase'


//ADD_campaign
export const login = (uid) => ({
  type: 'LOGIN',
  uid


});

export const logout = (uid) => ({
  type: 'LOGOUT',
  uid
})
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
