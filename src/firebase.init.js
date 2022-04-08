import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBc_9Uc56EO1cPiBdDyA7c6zm-8eonb72M",
    authDomain: "simple-firebase-authenti-c0300.firebaseapp.com",
    projectId: "simple-firebase-authenti-c0300",
    storageBucket: "simple-firebase-authenti-c0300.appspot.com",
    messagingSenderId: "861120486274",
    appId: "1:861120486274:web:c06962260d31045e214d9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;