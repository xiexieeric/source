import * as firebase from "firebase";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyB8V90CsMRbmODNCf8RdWY8JRRof4kZKfs",
  authDomain: "contractsarefun.firebaseapp.com",
  databaseURL: "https://contractsarefun.firebaseio.com",
  projectId: "contractsarefun",
  storageBucket: "contractsarefun.appspot.com",
  messagingSenderId: "35210521588"
};
export default firebase.initializeApp(config);
