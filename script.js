const menuBtn = document.querySelector("[data-menu-btn]") ;
const navLinks = document.querySelector("[data-nav-links]");
const menuBtnIcon= document.querySelector("[data-icon]");

menuBtn.addEventListener('click', (e)=>{
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})


const scrollRevealOption= {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header-container h1",{
...scrollRevealOption,
})
ScrollReveal().reveal(".header-container p",{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".header-container form",{
    ...scrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal(".header-container a",{
    ...scrollRevealOption,
    delay:1500,
})

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });