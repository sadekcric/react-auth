// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrB3q68JRJ9xuxAPhsZQMp7Bxo4H8KKJY",
  authDomain: "react-auth-14403.firebaseapp.com",
  projectId: "react-auth-14403",
  storageBucket: "react-auth-14403.appspot.com",
  messagingSenderId: "672650686596",
  appId: "1:672650686596:web:1067f3000cbc304cd0d2d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
