// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);