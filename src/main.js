// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnigo2pAbiRXwYSIzCqDZd_LeUwdNMl8c",
  authDomain: "isite-198b3.firebaseapp.com",
  projectId: "isite-198b3",
  storageBucket: "isite-198b3.appspot.com",
  messagingSenderId: "904593316692",
  appId: "1:904593316692:web:08cd7c528a9632eca986c1",
  measurementId: "G-K7021592PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);