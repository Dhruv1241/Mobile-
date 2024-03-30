// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAdyKS06hjHvIrM7oOj0mmr4-prWH0yyA",
  authDomain: "first-2c53e.firebaseapp.com",
  projectId: "first-2c53e",
  storageBucket: "first-2c53e.appspot.com",
  messagingSenderId: "246597310385",
  appId: "1:246597310385:web:5566474839675524c50f90",
  measurementId: "G-MVDKS45CP7",
  // dataBaseURL: "https://first-2c53e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseapp)
// const database = getDatabase(firebaseapp)