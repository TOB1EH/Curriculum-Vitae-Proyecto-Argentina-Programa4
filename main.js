
/* Boton menu responsive */
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

/* Scroll Reveal */
ScrollReveal().reveal('.principal');
ScrollReveal().reveal('.part2', { delay: 500});
ScrollReveal().reveal('.part3', { delay: 500});
ScrollReveal().reveal('.part4', { delay: 500});