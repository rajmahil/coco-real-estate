import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyAyLRsDXxCbwBNewOglTykWVrV4_Qb8lMw",
  authDomain: "coco-realestate.firebaseapp.com",
  projectId: "coco-realestate",
  storageBucket: "coco-realestate.appspot.com",
  messagingSenderId: "813915140614",
  appId: "1:813915140614:web:0b016577e90309ca7e4987",
  measurementId: "G-CTC29H6XLD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
