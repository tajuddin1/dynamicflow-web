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

var form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    fromSubmit();
});

function fromSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var cover = document.getElementById("cover").value;
    var file = document.getElementById("file").value;
    // var alertBox = document.getElementById("alertBox").style;
    if (name == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Your name";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "red";
        document.getElementById("alertBox").style.boxShadow= "inset 0px 0px 12px 13px #d70606c9";
        return false;
    } else {
        document.getElementById("alertBox").style.display = "none";
    }
    if (email == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Your Email";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "red";
        return false;
    } else {

        document.getElementById("alertBox").style.display = "none";
    }
    if (number == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Your Number";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "red";
        return false;
    } else {

        document.getElementById("alertBox").style.display = "none";
    }
    if (cover == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Something..";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "red";
        return false;
    } else {

        document.getElementById("alertBox").style.display = "none";
    }
    if (file == "") {
        document.getElementById("inputAlert").innerHTML = "Please upload your CV";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById("inputAlert").innerHTML = "From Submited";
        document.getElementById("submitResult").style.display = "block";
        document.getElementById("from1").style.display = "none";
    }
}

function closeBtn() {
    console.log("hello");
    document.getElementById("alertBox").style.display = "none";
    document.getElementById("name").style.borderStyle = "none";
    document.getElementById("name").style.borderBottom = "1px solid #95c120";
}