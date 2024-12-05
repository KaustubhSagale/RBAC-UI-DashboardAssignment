// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcb7IqPzq8pAWymLubCoQ3SLzj5SeUgvM",
  authDomain: "rbac-6cf8e.firebaseapp.com",
  projectId: "rbac-6cf8e",
  storageBucket: "rbac-6cf8e.firebasestorage.app",
  messagingSenderId: "245537677760",
  appId: "1:245537677760:web:77264496a10a8cd82da825",
  measurementId: "G-1WN3XGP2XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);