//console.log("hello, vanilla.");

const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");

const firCircle = document.querySelector(".firCircle");
const secCircle = document.querySelector(".secCircle");
const thirCircle = document.querySelector(".thirCircle");
const fourCircle = document.querySelector(".fourCircle");
const fifCircle = document.querySelector(".fifCircle");


const IMG = document.querySelector(".js-image");
let i =1;
IMG.src = `images/image-${i}.png`;
//imgSrc.src = "images/image-1.png";

function nextBtn() {
    if(i>0 && i<6){
        IMG.src = `images/image-${i++}.png`;
    }else{
        i=1;
    }
}
function prevBtn() {
    if(i>0 && i<6){
        IMG.src = `images/image-${i--}.png`;
    }else{
        i=5;
    }
}


function init() {
    rightBtn.addEventListener("click", nextBtn);
    leftBtn.addEventListener("click", prevBtn);
    firCircle.addEventListener("click", function(){
        IMG.src = `images/image-1.png`;
    });
    secCircle.addEventListener("click", function(){
        IMG.src = `images/image-2.png`;
    });
    thirCircle.addEventListener("click", function(){
        IMG.src = `images/image-3.png`;
    });
    fourCircle.addEventListener("click", function(){
        IMG.src = `images/image-4.png`;
    });
    fifCircle.addEventListener("click", function(){
        IMG.src = `images/image-5.png`;
    });
}
init();