// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt_8Wcn0hSBQxs8hrEh3TdEDeOcESgSxA",
  authDomain: "garbage-control.firebaseapp.com",
  projectId: "garbage-control",
  storageBucket: "garbage-control.appspot.com",
  messagingSenderId: "272794424068",
  appId: "1:272794424068:web:f20eb62d756f07a37a7651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
