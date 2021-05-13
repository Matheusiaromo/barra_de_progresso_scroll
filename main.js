
const barra = document.querySelector(".scroll")
const progresso = document.querySelector("#progresso")


window.addEventListener("scroll", function (e) {

  let tamanhoTotalPagina = document.documentElement.scrollHeight - window.innerHeight;

  let scrollAtual = (window.scrollY / tamanhoTotalPagina) * 100;

  barra.style.width = scrollAtual + "%";

})

