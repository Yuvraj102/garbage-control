// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvxlRlYqonlAEFoA1h3BTSPREDJVA-1Aw",
  authDomain: "garbage-control-133b0.firebaseapp.com",
  projectId: "garbage-control-133b0",
  storageBucket: "garbage-control-133b0.appspot.com",
  messagingSenderId: "464372997564",
  appId: "1:464372997564:web:c038396ffd13f58adc9fb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
