// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJtU8z4m_kTvxVqqV1QyDg8AaD4DYZjTg",
  authDomain: "e-commerce-ebcd1.firebaseapp.com",
  projectId: "e-commerce-ebcd1",
  storageBucket: "e-commerce-ebcd1.firebasestorage.app",
  messagingSenderId: "441421685452",
  appId: "1:441421685452:web:59335485edbd350208d869",
  measurementId: "G-C0H7R4N45P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
