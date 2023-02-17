import firebase from "firebase/app";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEgtQxU4SXSY1H_bn-3HI1_I6HpqkUGUo",
  authDomain: "centro-internacional-perthes.firebaseapp.com",
  projectId: "centro-internacional-perthes",
  storageBucket: "centro-internacional-perthes.appspot.com",
  messagingSenderId: "651337661623",
  appId: "1:651337661623:web:1b6dbc9473447718026132",
  measurementId: "G-KTPGD51WMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase;
analytics;