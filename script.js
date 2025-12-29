const slides = document.querySelectorAll(".slide");
let indiceAtual = 0;

function mostrarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    if (i === indice) slide.classList.add("ativo");
  });
}

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % slides.length;
  mostrarSlide(indiceAtual);
}

setInterval(proximoSlide, 3000);
// Alternar modo escuro
document.getElementById("toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  