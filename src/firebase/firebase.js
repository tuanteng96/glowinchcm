import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPJHFDAfmxh0o1nOnzX32sIdbP1zWzwIs",
    authDomain: "glowinc-5fe02.firebaseapp.com",
    projectId: "glowinc-5fe02",
    storageBucket: "glowinc-5fe02.appspot.com",
    messagingSenderId: "692512682373",
    appId: "1:692512682373:web:62a29bad734c8af1be94ec",
    measurementId: "G-MJZMVD7QPV"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };