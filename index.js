// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-MHhHEe-b5FaJ53tt5daeuMfIpX0TYI",
  authDomain: "groupproject-5c4ea.firebaseapp.com",
  databaseURL: "https://groupproject-5c4ea-default-rtdb.firebaseio.com",
  projectId: "groupproject-5c4ea",
  storageBucket: "groupproject-5c4ea.firebasestorage.app",
  messagingSenderId: "549776412793",
  appId: "1:549776412793:web:0a03c417d502eddac4c4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);