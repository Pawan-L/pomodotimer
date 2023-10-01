// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc87yXxE3V7_E9A37fD14mprkSKDgodpY",
  authDomain: "pomodotimer-myproject.firebaseapp.com",
  projectId: "pomodotimer-myproject",
  storageBucket: "pomodotimer-myproject.appspot.com",
  messagingSenderId: "977700121299",
  appId: "1:977700121299:web:b982523aae8695b24cc226",
  measurementId: "G-1XMPQMHZGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);