import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFXcIgRj6Qj_pppsYz1Vb1QrW2gscX3Ug",
  authDomain: "simple-firebase-learning-ac601.firebaseapp.com",
  projectId: "simple-firebase-learning-ac601",
  storageBucket: "simple-firebase-learning-ac601.appspot.com",
  messagingSenderId: "348563259713",
  appId: "1:348563259713:web:6c51bd974d3d60d7c6a1c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
