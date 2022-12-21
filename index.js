
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".Links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove(active);
        navMenu.classList.remove(active);
    }))





// display automatically
// let slideIndex = 0;
// showSlides();
// function showSlides() {
//     let i;
//     let sliders =document.getElementsByClassName("slides");

//     for(i = 0; i < sliders.length; i++) {
//         sliders[1].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > sliders.length){
//         slideIndex = 1
//     }
//     sliders[slideIndex -1].style.display ="block";
//     setTimeout(showSlides, 2000);
// }



// var swiper = new Swiper(".mySwiper", {
//     effect: "flip",
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });