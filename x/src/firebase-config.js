// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL4BTv7qh_eCH3NanE1mORhedinjVdOUs",
  authDomain: "react-firebase-81a05.firebaseapp.com",
  projectId: "react-firebase-81a05",
  storageBucket: "react-firebase-81a05.appspot.com",
  messagingSenderId: "334515172296",
  appId: "1:334515172296:web:afbbf182189d54e94f06fd",
  measurementId: "G-XMPMC5J59E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
