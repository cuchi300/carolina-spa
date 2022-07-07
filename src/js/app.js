document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

function iniciarApp() {
    sliderHeader();
    headerLogo();
}

function sliderHeader() {
    window.swiper = new Swiper({
        el: '.slider__contenedor', // aca va el contenedor del slider
        slideClass: 'slider__slide', // aca la clase que usa cada slider
        createElements: true, // el valor en true
        autoplay: {
            delay: 5000 // segundos para cambiar imagen automaticamente
        },
        loop: true, // vuelve a comenzar el slide
        pagination: true, // agrega iconos puntitos para saber en que pagina esta
        navigation: true // agrega flechas a los costados para pasar imagenes
    });
}

function headerLogo() {
    const headerLogo = document.querySelector('.header__logo');

    setTimeout(() => {
        headerLogo.classList.add('header__logo--mostrar');
    }, 1000);
}


