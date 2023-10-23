// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa3NfilxV4Q47jCkkhe79z92VdGrcbPhk",
  authDomain: "victorap-3fd4f.firebaseapp.com",
  databaseURL: "https://victorap-3fd4f-default-rtdb.firebaseio.com",
  projectId: "victorap-3fd4f",
  storageBucket: "victorap-3fd4f.appspot.com",
  messagingSenderId: "523198348452",
  appId: "1:523198348452:web:212ddf4460956ab487ba31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export default firebase;