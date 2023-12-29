new Splide( '#testimonialSlider', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    arrows: true,
    pagination: false,
    gap: '3rem',
    speed: 2500,
    // direction: 'ttb',
    // height: '32rem',
} ).mount();


new Splide( '#partnersCarousel', {
    type   : 'loop',
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    height: '27.5rem',
    drag: 'free',
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
    },
} ).mount(window.splide.Extensions);
