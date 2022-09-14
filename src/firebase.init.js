// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAFm8H7wDohe5oehdGUrV04gxyWPJNXTc",
  authDomain: "ema-john-simple-727d8.firebaseapp.com",
  projectId: "ema-john-simple-727d8",
  storageBucket: "ema-john-simple-727d8.appspot.com",
  messagingSenderId: "199369791583",
  appId: "1:199369791583:web:1916f7ba3fc1254d0c63ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
export default auth;