// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzUlyRMH3z36RkVjNI6Qy4rnrQlppOi9A",
    authDomain: "party-place-72494.firebaseapp.com",
    projectId: "party-place-72494",
    storageBucket: "party-place-72494.appspot.com",
    messagingSenderId: "940476083253",
    appId: "1:940476083253:web:5734504703c53a7b14957c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);