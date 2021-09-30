import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCTs726zzMCs0Qs8D8wCleLJCFUHBXve7c",
  authDomain: "renovcol.firebaseapp.com",
  databaseURL: "https://renovcol-default-rtdb.firebaseio.com",
  projectId: "renovcol",
  storageBucket: "renovcol.appspot.com",
  messagingSenderId: "261363174697",
  appId: "1:261363174697:web:e84b9527099785c0dafb38",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
