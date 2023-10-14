//Selecionando elementos 
const selo1 = document.querySelector('#selo1');
const selo2 = document.querySelector('#selo2');
const selo3 = document.querySelector('#selo3');
const selo4 = document.querySelector('#selo4');
const selo5 = document.querySelector('#selo5');
const title = document.querySelector('#title');
const avatar = document.querySelector('#avatar')

//Selo 1
selo1.addEventListener("mouseover", function(){
    title.style.color = "#66CAC0";
})
selo1.addEventListener("mouseout", function(){
    title.style.color = 'white'
})

//Selo 2
selo2.addEventListener("mouseover", function () {
    title.style.color = "#E37C18";
})
selo2.addEventListener("mouseout", function () {
    title.style.color = 'white'
})

//Selo 3
selo3.addEventListener("mouseover", function () {
    title.style.color = "#FFDE59";
})
selo3.addEventListener("mouseout", function () {
    title.style.color = 'white'
})


//Selo 4
selo4.addEventListener("mouseover", function () {
    title.style.color = "#D14465";
})
selo4.addEventListener("mouseout", function () {
    title.style.color = 'white'
})

//Selo 5
selo5.addEventListener("mouseover", function () {
    title.style.color = "#9FD972";
})
selo5.addEventListener("mouseout", function () {
    title.style.color = 'white'
})



//Trocar avatar

let imgIndex = 0;
const imgArray = [
    "./Medias/avatar.png",
    "./Medias/avatar2.png",
    "./Medias/avatar3.png"
]

avatar.addEventListener("click", function(){
    if(imgIndex>=imgArray.length){
        imgIndex = 0
    }
    this.setAttribute("src", imgArray[imgIndex])
    imgIndex++
})
