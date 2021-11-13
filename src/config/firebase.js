import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



firebase.initializeApp({
    apiKey: "AIzaSyAgw8A_-Lf8ZEUPzFCe1Foqflr8jGE7nwk",
    authDomain: "nchat-e69ed.firebaseapp.com",
    projectId: "nchat-e69ed",
    storageBucket: "nchat-e69ed.appspot.com",
    messagingSenderId: "833554029951",
    appId: "1:833554029951:web:7488d470468a3c42b34e4a",
    measurementId: "G-3741E94M7H"
})


const auth = firebase.auth()

const firestore =firebase.firestore()


export { firebase, auth, firestore };