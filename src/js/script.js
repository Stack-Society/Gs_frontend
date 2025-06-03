const clicarMenu = document.getElementById("menu-hamburguer")
const menu = document.getElementById("menu")

clicarMenu.addEventListener("click", () => {
    menu.classList.toggle('hidden')
})

