document.addEventListener("DOMContentLoaded", function () {
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    const slider = document.querySelector("#slider");
    const sliderSection = document.querySelectorAll(".carousel-section");

    let currentSlide = 1;
    let widthImg = 100 / sliderSection.length;

    btnLeft.addEventListener('click', () => moveSlide(-1));
    btnRight.addEventListener('click', () => moveSlide(1));

    function moveSlide(n) {
        showSlide(currentSlide += n);
    }

    function showSlide(n) {
        if (n > sliderSection.length) {
        currentSlide = 1;
        }

        if (n < 1) {
        currentSlide = sliderSection.length;
        }

        let newTransformValue = -(widthImg * (currentSlide - 1)) + '%';
    
        slider.style.transform = `translateX(${newTransformValue})`;
        slider.style.transition = "all ease .6s";
    }
});
