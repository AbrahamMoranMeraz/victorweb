// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBPkNEostGfO8rpIDT4bQI0UEr4M1_w4",
  authDomain: "victorweb-35913.firebaseapp.com",
  projectId: "victorweb-35913",
  storageBucket: "victorweb-35913.appspot.com",
  messagingSenderId: "1041699286297",
  appId: "1:1041699286297:web:5fac8c3b9ab69be3abe988"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export default firebase;