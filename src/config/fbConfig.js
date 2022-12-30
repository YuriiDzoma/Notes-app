// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "redux-firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBN4oH_lwQJAz1KxEeF_bCcrzJ6hjG4HI",
    authDomain: "sport-country-app.firebaseapp.com",
    databaseURL: "https://sport-country-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sport-country-app",
    storageBucket: "sport-country-app.appspot.com",
    messagingSenderId: "712794285781",
    appId: "1:712794285781:web:08f18e13be159de578e45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
