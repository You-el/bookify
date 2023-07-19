let mybtn = document.querySelector(".burger-menu");
let ul = document.querySelector(".links");

mybtn.addEventListener("click",()=> {
    ul.classList.toggle("active")
});

// Slider
const slides = document.querySelector(".slider").children;
const indicator = document.querySelector(".indicator");
let index = 0;

function nextSlide () {
    if(index==slides.length-1) {
        index=0;
    }
    else {
        index++
    }
    // console.log(index);
    changeSlides();
};


function circleIndicator () {
    for (let i = 0; i < slides.length ; i++){
        let div =  document.createElement("div");
        div.id = i;
        div.setAttribute("onclick","indicateSlide(this)");
        if (i == 0) {
            div.className = 'active';
        }
        indicator.appendChild(div);
    }
}

circleIndicator();


function updateCircle() {
    for (let i = 0; i < indicator.children.length ; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
};
updateCircle();

function changeSlides(){
    for (let i = 0 ; i < slides.length ; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
function indicateSlide(element) {
    index=element.id;
    changeSlides();
    updateCircle();
    resetTimer();
};
function resetTimer () {
    // When clicked on indicator or controlls button 
    // Stop Timer
    clearInterval(timer);
    // Start Timer Again
    timer = timer = setInterval(autoPlay,4000);
}
function autoPlay() {
    nextSlide();
    updateCircle();
};
let timer = setInterval(autoPlay,5000);

// Copyright
let scrpt = document.querySelector("script")
let container = document.createElement("div");
container.className = "container";
let addCopyright = document.createElement("div");

let copyText = document.createElement("p");
let secondText = document.createElement("p");
let timeTest = new Date();
let yearNow = timeTest.getFullYear();
copyText.innerHTML = `Copyright © ${yearNow}.All Right Reserved By Bookify`;
secondText.innerHTML = `Designed By Younes El`;

addCopyright.classList.add("copyright");
container.appendChild(copyText);
container.appendChild(secondText);
addCopyright.appendChild(container);
document.body.insertBefore(addCopyright,scrpt);

addCopyright.style.cssText = "background-color: #1b212f;"

function mediaqueryFunc () {
    let query = window.matchMedia("(max-width: 768px)")
    if (query.matches) {
        container.style.cssText = "display: flex; text-align: center; gap: 15px; color: #ffffff; font-family: var(--poppins); padding: 20px 0px; font-size: 14px; flex-direction: column; align-items: center;"
        secondText.style.cssText = "";
    } else {
        container.style.cssText = "display: flex; justify-content: space-between; color: #ffffff; font-family: var(--poppins); padding: 20px 0px; font-size: 14px;"
        secondText.style.cssText = "width: 40%"
    }
}
window.setInterval(mediaqueryFunc, 100);