//Selecionando elementos
const imgEscondida1 = document.querySelector("#imagemEscondida1");
const imgEscondida2 = document.querySelector("#imagemEscondida2");
const imgPrincipal = document.querySelector("#imgPrincipal");
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
const gameShop = document.querySelector("#gameShop")

//Setando variaveis padrão
let imgIndex = 0
let indexEscondida1 = 1
let indexEscondida2 = 2

//Criandop array com as imagens disponiveis
const imgArray = [
    "../../Medias/TheLastOfUs/item 2.jpg",
    "../../Medias/TheLastOfUs/item.jpg",
    "../../Medias/TheLastOfUs/item3.jpg"
]


//OnClick no botão da direita
nextBtn.addEventListener("click", function(){
    if (imgIndex >= imgArray.length) {
        imgIndex = 0
    }

    if (indexEscondida1 >= imgArray.length) {
        indexEscondida1 = 0
    }

    if (indexEscondida2 >= imgArray.length) {
        indexEscondida2 = 0
    }

    if (imgIndex < 0) {
        imgIndex = 2
    }

    if (indexEscondida2 < 0) {
        indexEscondida2 = 2
    }

    if (indexEscondida1 < 0) {
        indexEscondida1 = 2
    }

    imgPrincipal.setAttribute("src", imgArray[imgIndex])
    imgEscondida2.setAttribute("src", imgArray[indexEscondida2])
    imgEscondida1.setAttribute("src", imgArray[indexEscondida1])
    imgIndex++
    indexEscondida2++
    indexEscondida1++
})

//OnClick no botão da esquerda
prevBtn.addEventListener("click", function(){
    if (imgIndex < 0) {
        imgIndex = 2
    }

    if (indexEscondida2 < 0) {
        indexEscondida2 = 2
    }

    if (indexEscondida1 < 0) {
        indexEscondida1 = 2
    }

    if (imgIndex >= imgArray.length) {
        imgIndex = 0
    }

    if (indexEscondida1 >= imgArray.length) {
        indexEscondida1 = 0
    }

    if (indexEscondida2 >= imgArray.length) {
        indexEscondida2 = 0
    }


    imgPrincipal.setAttribute("src", imgArray[imgIndex])
    imgEscondida2.setAttribute("src", imgArray[indexEscondida2])
    imgEscondida1.setAttribute("src", imgArray[indexEscondida1])
    imgIndex--
    indexEscondida2--
    indexEscondida1--
})


//Hover nos games
gameShop.addEventListener("mouseover", function(){
    gameShop.style.opacity = "0.35"
})

gameShop.addEventListener("mouseout", function () {
    gameShop.style.opacity = "1"
})