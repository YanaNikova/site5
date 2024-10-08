

const menu = document.querySelector('.menu_activ'), 
menuItem = document.querySelectorAll('.menu_item'), 
hamburger = document.querySelector('.hamburger'); 

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('hamburger_active'); 
    menu.classList.toggle('menu_active'); 
}); 

menuItem.forEach(item => { 
    item.addEventListener('click', () => { 
        hamburger.classList.toggle('hamburger_active'); 
        menu.classList.toggle('menu_active'); 
    }) 
}) ;
const swiper = new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay:{
        delay: 6000,
        stopOnLastSlide: true,
    },
    speed: 800
});









