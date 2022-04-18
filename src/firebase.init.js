// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB3pYHI6wjWnz-RUQKanNDS1Z7Q1v6j9M",
  authDomain: "gym-website-2e934.firebaseapp.com",
  projectId: "gym-website-2e934",
  storageBucket: "gym-website-2e934.appspot.com",
  messagingSenderId: "628605904173",
  appId: "1:628605904173:web:57c4752ea5abda9243dfa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;