// new Splide( '#testimonialSlider', {
//     type   : 'loop',
//     perPage: 1,
//     perMove: 1,
//     autoplay: true,
//     arrows: true,
//     pagination: false,
//     gap: '3rem',
//     speed: 2500,
//     // direction: 'ttb',
//     // height: '32rem',
// } ).mount();


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


new Splide( '#faq-accordion', {
    type   : 'loop',
    direction: 'ttb',
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: false,
    drag: 'free',
    autoHeight: true,
    height    : '36rem',
    wheel    : true,
    autoScroll: {
        speed: 1,
        pauseOnHover: true,
    },
} ).mount(window.splide.Extensions);


//Copyright year print
document.getElementById("year").innerHTML = new Date().getFullYear();



// document.addEventListener('DOMContentLoaded', function () {

//     let clientTestimonial = document.querySelectorAll('#client_testimonial');
//     clientTestimonial.forEach(function (element) {
//         let splide = new Splide(element, {
//             type: 'loop',
//             perPage: 1,
//             perMove: 1,
//             gap: '2rem',
//             pagination: false,
//             arrows: false,
//             autoplay: true,
//             speed: 1000,
//         });
//         splide.mount();
//     });


//     let testimonialThumbnails = document.querySelectorAll('#testimonialThumbnails');
//     testimonialThumbnails.forEach(function (element) {
//         let splide = new Splide(element, {
//             type: 'loop',
//             perPage: 4,
//             perMove: 1,
//             gap: '1.875rem',
//             padding: '8.75rem',
//             pagination: false,
//             arrows: true,
//             autoplay: true,
//             speed: 1000,
//             classes: {
//                 arrows: 'splide__arrows testimony-thumb-arrows',
//                 arrow : 'splide__arrow testimony-thumb-arrow',
//                 prev  : 'splide__arrow--prev testimony-thumb-prev',
//                 next  : 'splide__arrow--next testimony-thumb-next',
//         },
//         });
//         splide.mount();
//     });
// });



document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#client_testimonial', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '4rem',
        pagination: false,
        direction: 'ttb',
        height: '30rem',
        autoHeight: true,
        arrows: false,
        cover: true,
        autoplay: true,
        speed: 1200,
    } );

    var thumbnails = new Splide( '#testimonialThumbnails', {
        type: 'loop',
        perPage: 4,
        gap: '1.875rem',
        padding: '8.75rem',
        pagination: false,
        arrows: true,
        autoplay: true,
        speed: 1000,
        rewind: true,
        focus: 'center',
        cover: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
    } );

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
} );


//Invention slider
document.addEventListener('DOMContentLoaded', function () {
    let invention_inner = document.querySelectorAll('#invention_inner_slider');

    invention_inner.forEach(function (element) {
        let splide = new Splide(element, {
            type: 'loop',
            perPage: 2,
            perMove: 1,
            gap: '2rem',
            pagination: false,
            arrows: false,
            padding: '7rem',
            drag: 'free',
            autoScroll: {
                speed: 0.9,
                pauseOnHover: true,
            },
        });

        splide.mount(window.splide.Extensions);
    });
});

// Invention inner Scroller slider
const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("area-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    })
}