// BOTONES NAVBAR > menu

// Boton Balance
document.querySelector("#btn-balance").addEventListener("click", () => {
    document.querySelector("#section-balance").classList.remove("is-hidden");
    document.querySelector("#section-categoria").classList.add("is-hidden");
    document.querySelector("#section-reportes").classList.add("is-hidden");
    document.querySelector("#nva-operacion").classList.add("is-hidden");
})
//Boton Categorías
document.querySelector("#btn-categoria").addEventListener("click", () => {
    document.querySelector("#section-categoria").classList.remove("is-hidden");
    document.querySelector("#section-balance").classList.add("is-hidden");
    document.querySelector("#section-reportes").classList.add("is-hidden");
    document.querySelector("#nva-operacion").classList.add("is-hidden");
})
// Boton Reportes
document.querySelector("#btn-reportes").addEventListener("click", () => {
    document.querySelector("#section-reportes").classList.remove("is-hidden");
    document.querySelector("#section-categoria").classList.add("is-hidden");
    document.querySelector("#section-balance").classList.add("is-hidden");
    document.querySelector("#nva-operacion").classList.add("is-hidden");
})


// SECTION BALANCE
// Boton nueva operacion 
document.querySelector(".btn-nva-op").addEventListener("click", () => {
    document.querySelector("#section-balance").classList.add("is-hidden");
    document.querySelector("#nva-operacion").classList.remove("is-hidden");
    document.querySelector("#section-categoria").classList.add("is-hidden");
    document.querySelector("#section-reportes").classList.add("is-hidden");
})


