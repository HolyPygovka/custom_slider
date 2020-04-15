let mainSlider = document.querySelector('.main_slider');
mainSlider.customSlider({
    maxSlides: 1,
    slideWidth: 600,
    slideHeight: 400,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 400,
});

let newsSlider = document.querySelector('.news_slider');
newsSlider.customSlider({
    maxSlides: 1,
    slideWidth: 800,
    slideHeight: 600,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 400,
});