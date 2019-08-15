var mySwiper = new Swiper('#swiper1', {
    pagination: {
        el: '#page1',
        clickable: true,
    }
})

var mySwiper2 = new Swiper('#swiper2', {
    // autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 7,
})

var mySwiper3 = new Swiper('#swiper3', {
    // autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 7,
    pagination: {
        el: '#page3',
        clickable: true,
    }
})


mySwiper3.controller.control = mySwiper2;
mySwiper2.controller.control = mySwiper3;

