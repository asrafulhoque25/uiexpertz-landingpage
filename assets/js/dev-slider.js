new Splide( '#testimonialSlider', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    arrows: true,
    pagination: false,
    gap: '2rem',
} ).mount();


new Splide( '#partnersCarousel', {
    type   : 'loop',
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    height: '27.5rem',
    drag: 'freeg',
    autoScroll: {
        speed: 1,
    },
} ).mount(window.splide.Extensions);
