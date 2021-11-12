import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

//initialize firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;

