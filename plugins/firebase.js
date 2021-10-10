// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const app = initializeApp({
  apiKey: "AIzaSyDUHLtCHDfut1M9InZK-afSPK3rEPU1Ymo",
  authDomain: "ittisafur-3e28a.firebaseapp.com",
  projectId: "ittisafur-3e28a",
  storageBucket: "ittisafur-3e28a.appspot.com",
  messagingSenderId: "530180186622",
  appId: "1:530180186622:web:f68d7ce6fa33904b0a20af",
  measurementId: "G-GRWS7W731T"
});
export const auth = getAuth(app);

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const logout = async () => {
  await signOut(auth);
};

export { onAuthStateChanged };
