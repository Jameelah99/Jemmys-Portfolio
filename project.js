let slideIndex = 1
showSlides(slideIndex);

// next and prev control
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let sliders = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > sliders.lenght){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = sliders.length
    }
    for (i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    sliders[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
    dots[slideIndex-1].className += "active";
}
