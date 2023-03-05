const btnMobile = document.querySelector('#btnMobile');
const menu = document.querySelector(".menuItens")

btnMobile.addEventListener("click", function(){
    menu.classList.toggle("active")
})