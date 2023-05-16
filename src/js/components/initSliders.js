import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const gallerySlider = new Swiper('.swiper.gallery__slider', {
	slidesPerView: 1,
	spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    speed: 1000,
});

