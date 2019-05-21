import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBfxybjZstHiIlcIwWsaPoiNdaoRo3m-UE",
  authDomain: "collective-engine.firebaseapp.com",
  databaseURL: "https://collective-engine.firebaseio.com",
  projectId: "collective-engine",
  storageBucket: "collective-engine.appspot.com",
  messagingSenderId: "316349873789"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };
