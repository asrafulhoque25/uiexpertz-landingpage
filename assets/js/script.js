


// banner slider
new Splide("#bannerSlider", {
    type: "loop",
    drag: "free",
    perPage: 4,
    gap: "1.875rem",
    height: "10rem",
    arrows: false,
    pagination: false,
    
}).mount(window.splide.Extensions);

$(window).on("load", function () {
    // code should be execute here
    // button effect
    // execute : on hover
    $(function () {
        document.querySelectorAll(".button-effect").forEach(function (button) {
            button.innerHTML =
                "<div><span>" +
                button.textContent.split(" ").join("</span> <span>") +
                "</span></div>";
        });
    });
});


   // text animation    
document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.fill');
    setTimeout(function() {
      element.classList.add('active');

    }, 1000);
});



/**
 * ========================================================
 * this function execute when DOM element ready
 * ===========================================================
 */

    // tooltip animation
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);

// Splide slider activator.

/* =========== Services Two Slider ===========*/
new Splide("#slider1", {
    type: "loop",
    drag: "free",
    perPage: 3,
    gap: "1.875rem",
    direction: "ttb",
    height: "60rem",
    arrows: false,
    pagination: false,
    focus  : 'center',
    autoScroll: {
        speed: 0.6,
    },
}).mount(window.splide.Extensions);

new Splide("#slider2", {
    type: "loop",
    drag: "free",
    perPage: 3,
    gap: "1.875rem",
    direction: "ttb",
    height: "60rem",
    focus  : 'center',
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: -0.6,
    },
}).mount(window.splide.Extensions);



// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '#bannerSlider' ).mount();
//   } );
/* =========== Services Two Slider ===========*/

/* =========== Services Two Slider ===========*/

