import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCotJZG9n6I2iNs1AWJqxnbCBfpaNfvz-g",
  authDomain: "interior-ca16f.firebaseapp.com",
  projectId: "interior-ca16f",
  storageBucket: "interior-ca16f.appspot.com",
  messagingSenderId: "384435632043",
  appId: "1:384435632043:web:6e31af3d78ad947a6fc4ee",
  measurementId: "G-F57DG08G9B"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
