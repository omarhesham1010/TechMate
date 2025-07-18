// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWEDViuN5JZ2Ip1J6MIGQp_J-m-qZCfQo",
  authDomain: "techmate-b96be.firebaseapp.com",
  projectId: "techmate-b96be",
  storageBucket: "techmate-b96be.firebasestorage.app",
  messagingSenderId: "237717712377",
  appId: "1:237717712377:web:951fe3ead9cb2679046128",
  measurementId: "G-2DCLX67674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { auth, provider }; 