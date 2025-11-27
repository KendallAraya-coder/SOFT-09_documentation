

document.addEventListener('DOMContentLoaded', () => {
    const btnSingUp = document.getElementById("btn-sing-up");
    const btnSingIn = document.getElementById("btn-sing-in");
    const container = document.querySelector(".container");
    const iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", ()=>{
      window.location.href = "./index.html"
    })
    btnSingIn.addEventListener("click", () => {
        container.classList.remove("toggle");
    })
    btnSingUp.addEventListener("click", () => {
        container.classList.add("toggle");
    })

})