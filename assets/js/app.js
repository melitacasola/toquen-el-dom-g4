document.addEventListener("DOMContentLoaded", function () {
    const btnLeft = document.querySelector(".btnLeft");
    const btnRight = document.querySelector(".btnRight");
    const slider = document.querySelector("#slider");
    const sliderSection = document.querySelectorAll(".carouselSection");

    let currentSlide = 1;
    let widthImg = 155 / sliderSection.length;

    if(btnLeft){
        btnLeft.addEventListener('click', () => moveSlide(-1));
    }
    if (btnRight) {
        btnRight.addEventListener('click', () => moveSlide(1));
        
    }


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

    /* ----EVENTO MENU DESPLEGABLE------*/
    const menuIcon = document.getElementById("menuBurger");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle("show");
    });

    /*------- Btn Volver a pag principal -----*/
    const backBtn = document.getElementById("btnBack"); 
    if(backBtn){
        backBtn.addEventListener('click', () => window.location.href = '../home.html')
    }
    
})
