import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDn_1eNLuiz4LkuRj0Ajl6_FtfxPunKnKk",
  authDomain: "student-library-b7d19.firebaseapp.com",
  projectId: "student-library-b7d19",
  storageBucket: "student-library-b7d19.appspot.com",
  messagingSenderId: "149163663641",
  appId: "1:149163663641:web:41db3bd8bdd718aad66588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app