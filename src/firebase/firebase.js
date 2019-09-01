import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAl8xZDwYZIIt7Q4EdoFLcOWWSD9XHNCQ0",
  authDomain: "expensify-70de6.firebaseapp.com",
  databaseURL: "https://expensify-70de6.firebaseio.com",
  projectId: "expensify-70de6",
  storageBucket: "expensify-70de6.appspot.com",
  messagingSenderId: "96555489737",
  appId: "1:96555489737:web:b319cb6aa76da028"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
