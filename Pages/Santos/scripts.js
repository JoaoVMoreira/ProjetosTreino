const btnMobile = document.querySelector('#btnMobile');
const menu = document.querySelector(".menuItens")

btnMobile.addEventListener("click", function(){
    menu.classList.toggle("active")
})


///controles carrossel noticias

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right")
const carrossel = document.querySelector("#carrossel-noticias")

arrowLeft.addEventListener("click", ()=> {
    carrossel.scrollBy(-300, 0)
})

arrowRight.addEventListener("click", ()=> {
    carrossel.scrollBy(300, 0)
})


//Controle carrossel de videos

const arrowLeftVideo = document.querySelector(".arrow-left-videos");
const arrowRightVideo = document.querySelector(".arrow-right-videos")
const carrosselVideo = document.querySelector(".carrossel-videos")

arrowLeftVideo.addEventListener("click", () => {
    carrosselVideo.scrollBy(-200, 0)
})

arrowRightVideo.addEventListener("click", () => {
    carrosselVideo.scrollBy(200, 0)
})


//Controle carrossel de icones

const arrowLeftIcon = document.querySelector(".arrow-left-icon");
const arrowRighticon = document.querySelector(".arrow-right-icon")
const carrosselicon = document.querySelector("#lista-de-icones")

arrowLeftIcon.addEventListener("click", () => {
    carrosselicon.scrollBy(-200, 0)
})

arrowRighticon.addEventListener("click", () => {
    carrosselicon.scrollBy(200, 0)
})

// Controle carrossel de jogadores 

const arrowLeftPlayer = document.querySelector(".arrow-left-player");
const arrowRightPlayer = document.querySelector(".arrow-right-player")
const carrosselPlayer = document.querySelector("#carrossel-jogadores")

arrowLeftPlayer.addEventListener("click", () => {
    carrosselPlayer.scrollBy(-600, 0)
})

arrowRightPlayer.addEventListener("click", () => {
    carrosselPlayer.scrollBy(600, 0)
})