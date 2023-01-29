

import firebase from "firebase/compat/app";

import 'firebase/compat/firestore'


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCAF1tu_J3dgKLszVnY7GYIi8kf74C7Eqo",
    authDomain: "todo-app-61178.firebaseapp.com",
    projectId: "todo-app-61178",
    storageBucket: "todo-app-61178.appspot.com",
    messagingSenderId: "514764473516",
    appId: "1:514764473516:web:224e86c12ff2e0a88b8b09",
    measurementId: "G-RNTLX0Z9X2"

});



const db = firebaseApp.firestore();
export default db;
