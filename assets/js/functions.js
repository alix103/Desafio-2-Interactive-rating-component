const contenedorPrincipal = document.querySelector(".container")
const contenedorGracias = document.querySelector(".container-thank-you")
const botonSubmit = document.getElementById("btn-submit")
const rating = document.getElementById("calificacion")
const valor = document.querySelectorAll(".btn-num")


botonSubmit.addEventListener("click", () => {
    contenedorGracias.classList.remove("ocultar")
    contenedorPrincipal.style.display = "none"
})

valor.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})