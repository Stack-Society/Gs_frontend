const clicarMenu = document.getElementById("menu-hamburguer")
const menu = document.getElementById("menu")

clicarMenu.addEventListener("click", () => {
    menu.classList.toggle('hidden')
})

const botoes = [
  { botaoId: "botao", textoId: "texto" },
  { botaoId: "botao1", textoId: "texto1" },
  { botaoId: "botao2", textoId: "texto2" },
  { botaoId: "botao3", textoId: "texto3" },
];

botoes.forEach(({ botaoId, textoId }) => {
  const botao = document.getElementById(botaoId);
  const texto = document.getElementById(textoId);
  const label = botao.querySelector(".label");

  botao.addEventListener("click", () => {
    const isOpen = texto.style.maxHeight && texto.style.maxHeight !== "0px";

    if (isOpen) {
      texto.style.maxHeight = "0px";
      texto.classList.remove("opacity-100");
      texto.classList.add("opacity-0");
      label.textContent = "Ler Mais ▼";
    } else {
      texto.style.maxHeight = texto.scrollHeight + "px";
      texto.classList.remove("opacity-0");
      texto.classList.add("opacity-100");
      label.textContent = "Ler Menos ▲";
    }
  });
});