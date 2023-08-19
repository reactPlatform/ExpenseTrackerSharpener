import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBGJF0Euus_QZBTH4bsAie6cy0zZrhzK38",
  authDomain: "emailauthentication-f9e8f.firebaseapp.com",
  projectId: "emailauthentication-f9e8f",
  storageBucket: "emailauthentication-f9e8f.appspot.com",
  messagingSenderId: "804336942274",
  appId: "1:804336942274:web:35f6025e564faf715ecf5b"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);