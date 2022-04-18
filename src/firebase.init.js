// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX6Tghh36ZPttpM5ARqRTWikjPeHAKpWs",
  authDomain: "tourist-guide-24ebc.firebaseapp.com",
  projectId: "tourist-guide-24ebc",
  storageBucket: "tourist-guide-24ebc.appspot.com",
  messagingSenderId: "687419718644",
  appId: "1:687419718644:web:59f3516e96fbf1493497a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
