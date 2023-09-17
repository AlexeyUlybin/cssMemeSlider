const sliderImgs = document.getElementsByClassName("slider-img");
const sliderLine = document.querySelector(".slider-line");
const sliderDots = document.getElementsByClassName("slider-dot");
const textLine = document.querySelector(".slider-text");
let index = 0;

moveSlides(index);

function moveSlides(index) {
    sliderLine.style.transform = `translateX(${-index * 100}%)`;
    textLine.style.transform = `translateX(${-index * 100}%)`;
}

function thisSlide(index) {
    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].classList.remove('slider-dot-on');
        sliderDots[i].classList.add('slider-dot-off');
    }
    sliderDots[index].classList.remove('slider-dot-off');
    sliderDots[index].classList.add('slider-dot-on');
    moveSlides(index);
}