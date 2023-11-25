document.addEventListener("DOMContentLoaded", function () {
    const btnLeft = document.querySelector(".btn-left"),
        btnRigth = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".carousel-section");


    btnLeft.addEventListener('click', moveToLeft)
    btnRigth.addEventListener('click', moveToRight)
    
    //variables para mover los % de ubicacion en el CSS
    let operacion = 0,
        counter = 0,
        widthImg = 100 / sliderSection.length;

    console.log(`ctas img tengo?? ${sliderSection.length-1}`);
    
    console.log(counter);

    function moveToLeft() {
        counter--;
        if(counter < 0){
            console.log(counter);
            counter = sliderSection.length -1;
            console.log(counter);

            console.log(operacion);
            operacion = widthImg * (sliderSection.length-1)
            console.log(operacion);

            slider.style.transform = `translateX(-${operacion}%)`
            // slider.style.transition = "none";
            return
        }


        operacion -= widthImg;
        console.log(operacion);
        slider.style.transform = `translateX(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }  
    
    
    function moveToRight() {
        if(counter >= sliderSection.length-1){
            counter = 0;
            operacion = 0;
            slider.style.transform = `translateX(-${operacion}%)`;
            // slider.style.transition = "none";
            return
        }
        counter++
        console.log(counter);

        operacion += widthImg;
        // console.log(operacion);
        slider.style.transform = `translateX(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    }


});