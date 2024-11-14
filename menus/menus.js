// Función para mostrar solo las tarjetas de la categoría seleccionada para un día específico
function showCategory(day, category) {
    const comidaCards = document.querySelectorAll(`#productos-${day} .comida`);
    const bebidaCards = document.querySelectorAll(`#productos-${day} .bebida`);
    const postreCards = document.querySelectorAll(`#productos-${day} .postre`);

    // Oculta todas las categorías de ese día
    comidaCards.forEach(card => card.style.display = "none");
    bebidaCards.forEach(card => card.style.display = "none");
    postreCards.forEach(card => card.style.display = "none");

    // Muestra las tarjetas de la categoría seleccionada
    if (category === "comida") {
        comidaCards.forEach(card => card.style.display = "block");
    } else if (category === "bebida") {
        bebidaCards.forEach(card => card.style.display = "block");
    } else if (category === "postre") {
        postreCards.forEach(card => card.style.display = "block");
    }
}

// Función para asignar eventos a los botones de cada día
function setCategoryButtons(day) {
    const comidasBtn = document.getElementById(`comidas-btn-${day}`);
    const bebidasBtn = document.getElementById(`bebidas-btn-${day}`);
    const postresBtn = document.getElementById(`postres-btn-${day}`);

    // Botón de Comidas
    comidasBtn.addEventListener("click", () => {
        comidasBtn.classList.add("active");
        bebidasBtn.classList.remove("active");
        postresBtn.classList.remove("active");
        showCategory(day, "comida");
    });

    // Botón de Bebidas
    bebidasBtn.addEventListener("click", () => {
        bebidasBtn.classList.add("active");
        comidasBtn.classList.remove("active");
        postresBtn.classList.remove("active");
        showCategory(day, "bebida");
    });

    // Botón de Postres
    postresBtn.addEventListener("click", () => {
        postresBtn.classList.add("active");
        comidasBtn.classList.remove("active");
        bebidasBtn.classList.remove("active");
        showCategory(day, "postre");
    });

    // Inicializa mostrando solo las tarjetas de "Comidas" por defecto
    showCategory(day, "comida");
}

// Asigna los eventos de los botones para cada día
setCategoryButtons("viernes");
setCategoryButtons("sabado");
setCategoryButtons("domingo");