import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBDCS-vFyppYDvefn5gjMiQ3IjwmJh24Ww",
    authDomain: "starthere-ce7c4.firebaseapp.com",
    databaseURL: "https://starthere-ce7c4.firebaseio.com",
    projectId: "starthere-ce7c4",
    storageBucket: "starthere-ce7c4.appspot.com",
    messagingSenderId: "903282953117",
    appId: "1:903282953117:web:474c577d0d448cfb57fd74",
    measurementId: "G-S4C530ZWT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
