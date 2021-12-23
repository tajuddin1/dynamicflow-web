document.addEventListener('DOMContentLoaded', () => {
    const indicatorPlus = document.getElementById("plus");
    const indicatorMinus = document.getElementById("minus");
    const indicatorPrev = document.getElementById("prev");
    const indicatorNext = document.getElementById("next");
    const elementSlider1 = document.querySelector(".element-slider1");
    const elementSlider2 = document.querySelector(".element-slider2");

    elementSlider1.style.display = "flex";
    elementSlider2.style.display = "none";
    console.log(elementSlider1.style.display);
    console.log(elementSlider2.style.display);


    indicatorPlus.addEventListener('click', () => {
        console.log(elementSlider1.style.display);
        console.log(elementSlider2.style.display);
    
        elementSlider1.style.display = "none";
        elementSlider2.style.display = "flex";
    });

    indicatorMinus.addEventListener('click', () => {
        console.log(elementSlider1.style.display);
        console.log(elementSlider2.style.display);
    
        elementSlider1.style.display = "flex";
        elementSlider2.style.display = "none";
    });

    indicatorPrev.addEventListener('click', () => {

        if (elementSlider1.style.display == "flex") {
            elementSlider1.style.display = "none";
        } else {
            elementSlider1.style.display = "flex";
        }
        if (elementSlider2.style.display == "flex") {
            elementSlider2.style.display = "none";
        } else {
            elementSlider2.style.display = "flex";
        }
    });

    indicatorNext.addEventListener('click', () => {
        if (elementSlider1.style.display == "flex") {
            elementSlider1.style.display = "none";
        } else {
            elementSlider1.style.display = "flex";
        }
        if (elementSlider2.style.display == "flex") {
            elementSlider2.style.display = "none";
        } else {
            elementSlider2.style.display = "flex";
        }
    });

});