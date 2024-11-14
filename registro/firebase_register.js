import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "../firebase/firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const registroForm = document.querySelector("#registerForm");

registroForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = registroForm["name-registro"].value;
    const email = registroForm["email-registro"].value;
    const password = registroForm["password-registro"].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;

        // Guarda el nombre en Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            password: password
        });

        console.log("Bienvenido " + name);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        window.location.href = "../home/home.html";
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('Correo ya existente');
        } else if (error.code === 'auth/invalid-email') {
            console.log('Correo invalido');
        } else if (error.code === 'auth/weak-password') {
            console.log('Contraseña no valida');
        } else {
            console.log('Error al crear el usuario:', error.message);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = '../home/home.html';
    }
});
