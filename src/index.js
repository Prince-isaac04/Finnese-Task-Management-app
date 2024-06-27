// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//import {getAuth} from "firebase/auth"
//import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrqUHas7w1ureBo8abYqwWpevX1Q4SLSU",
  authDomain: "finesse-task-manager.firebaseapp.com",
  projectId: "finesse-task-manager",
  storageBucket: "finesse-task-manager.appspot.com",
  messagingSenderId: "816654008325",
  appId: "1:816654008325:web:0a4b22dab9ea4d283e5c6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = getAuth(firebaseApp);
//const db = getFirestore(firebaseApp);
