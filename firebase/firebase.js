import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6Rc5PGjJ9fwjUTW3Pvs7176cqKO6A_vs",
    authDomain: "usuariosgama.firebaseapp.com",
    projectId: "usuariosgama",
    storageBucket: "usuariosgama.appspot.com",
    messagingSenderId: "144281615392",
    appId: "1:144281615392:web:732bda627a2279006e1045"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
