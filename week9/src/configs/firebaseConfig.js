// don't forget to npm install --save firebase
import * as firebase from "firebase";

// grab this bit from the firebase console
let config = {
  // in practice, we normally wouldn't upload things like the following onto GitHub
  // for security reasons; can either add this file to the .gitignore file or use
  // environmental variables
  apiKey: "AIzaSyD28Cv3250n4jBg5n-AMdKdamIUZ9h59vU",
  authDomain: "chat-demo-c8bdb.firebaseapp.com",
  databaseURL: "https://chat-demo-c8bdb.firebaseio.com",
  projectId: "chat-demo-c8bdb",
  storageBucket: "",
  messagingSenderId: "499264786446"
};

export default firebase.initializeApp(config);
