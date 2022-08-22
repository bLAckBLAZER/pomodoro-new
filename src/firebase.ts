import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6GA5xxoalq6alF4475zpXqwMa6-wBj5k",
  authDomain: "pomodoro-react-1b961.firebaseapp.com",
  projectId: "pomodoro-react-1b961",
  storageBucket: "pomodoro-react-1b961.appspot.com",
  messagingSenderId: "274961996350",
  appId: "1:274961996350:web:c25b6e6d2057431b5d8f6f",
  measurementId: "G-Z6WK1M0DXZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {};
