import * as firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyDgt_FPZrwVKvjMKz4zDR1zarop6fcLZpk",
  authDomain: "learnkey-8ccce.firebaseapp.com",
  databaseURL: "https://learnkey-8ccce.firebaseio.com",
  projectId: "learnkey-8ccce",
  storageBucket: "learnkey-8ccce.appspot.com",
  messagingSenderId: "331893626805"
};

var fire = firebase.initializeApp(config);
export default fire;
