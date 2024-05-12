// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ih1HRrCHHPfU0x__dnu7DUeR8OQArHE",
  authDomain: "pratice-project-e328e.firebaseapp.com",
  projectId: "pratice-project-e328e",
  storageBucket: "pratice-project-e328e.appspot.com",
  messagingSenderId: "671152030966",
  appId: "1:671152030966:web:f5a5086e755253f58c18d7",
  measurementId: "G-D8DSLVGPTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;