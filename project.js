// automatic
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let sliders = document.getElementsByClassName("slides");
    let caption = document.getElementsByClassName("text");
    for (i = 0; i < sliders.length; i++){
        sliders[i].style.display = "none";
    }
    for(i = 0; i < caption.length; i++){
        caption[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > sliders.length){
        slideIndex = 1
    }
    sliders[slideIndex-1].style.display = "block";
    
    if(slideIndex > caption.length){
        slideIndex = 1
    }
    caption[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000)
}