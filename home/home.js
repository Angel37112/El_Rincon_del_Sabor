import { auth, db } from "../firebase/firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = '../index.html';
        return;
    }

    const user = auth.currentUser;
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userName = docSnap.data().name;
            document.getElementById('welcome-text').textContent = `Bienvenido ${userName}`;
        } else {
            console.log("No such document!");
        }
    }

    // Evento para cerrar sesión
    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        window.location.href = '../index.html';
    });

    const subMenu = document.getElementById("subMenu");
    const toggleButton = document.getElementById("toggleButton");
    const exitIcon = document.querySelector('.bx-exit'); // Referencia al ícono de Exit
    const logoutButton = document.getElementById('logoutButton'); // Referencia al botón de Cerrar Sesión

    // Alternar visibilidad del submenú
    toggleButton.addEventListener('click', function() {
        toggleMenu(); // Llama a la función toggleMenu cuando se hace clic en el ícono de usuario
    });

    function toggleMenu() {
        // Si el submenú está abierto, lo cierra
        if (subMenu.classList.contains("open-menu")) {
            subMenu.classList.remove("open-menu");
        } else {
            // Si el submenú está cerrado, lo abre y muestra el botón de cerrar sesión y el ícono de Exit
            subMenu.classList.add("open-menu");
            logoutButton.style.display = 'inline-block'; // Muestra el botón de Cerrar Sesión
            exitIcon.style.display = 'inline-block'; // Muestra el ícono de Exit
        }
    }

    // Evento para ocultar el botón y el ícono de Exit
    exitIcon.addEventListener('click', function () {
        logoutButton.style.display = 'none'; // Oculta el botón de Cerrar Sesión
        exitIcon.style.display = 'none'; // Oculta el ícono de Exit
    });
});