// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1E7KO51UTugwfyQQukftQNFYK7BExVqc",
  authDomain: "labs-2023-b8afa.firebaseapp.com",
  databaseURL: "https://labs-2023-b8afa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "labs-2023-b8afa",
  storageBucket: "labs-2023-b8afa.appspot.com",
  messagingSenderId: "681217461291",
  appId: "1:681217461291:web:3f532fe4fdae72a0992e6e",
  measurementId: "G-SDV1K9E64G"
};


const fbApp = initializeApp(firebaseConfig);
export default fbApp;