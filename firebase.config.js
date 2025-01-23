// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJtU8z4m_kTvxVqqV1QyDg8AaD4DYZjTg",
  authDomain: "e-commerce-ebcd1.firebaseapp.com",
  projectId: "e-commerce-ebcd1",
  storageBucket: "e-commerce-ebcd1.firebasestorage.app",
  messagingSenderId: "441421685452",
  appId: "1:441421685452:web:59335485edbd350208d869",
  measurementId: "G-C0H7R4N45P"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export { app };
