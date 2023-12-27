// Get all tab items and content items
const tabItems = document.querySelectorAll('.splide__slide');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Find the index of the active tab item
let activeIndex = -1;
tabItems.forEach((item, index) => {
  if (item.classList.contains('is-active')) {
    activeIndex = index;
  }
});

// Show the corresponding content item based on the active tab item
if (activeIndex !== -1) {
  tabContentItems.forEach((contentItem, index) => {
    if (index === activeIndex) {
      contentItem.classList.add('d-block');
    } else {
      contentItem.classList.remove('d-block');
    }
  });
}


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
    focus: "center",
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
    focus: "center",
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: -0.6,
    },
}).mount(window.splide.Extensions);

new Splide("#slider3", {
    type: "loop",
    drag: "free",
    perPage: 3,
    gap: "1.875rem",
    height: "6rem",
    focus: "center",
    autoWidth: true,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 1.3,
    },
}).mount(window.splide.Extensions);




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

// portfolio 
new Splide( '#tabslider', {
    direction: 'ttb',
    height   : '10rem',
    wheel    : true,
    perPage: 3,
    focus  : 'center',
  }).mount();


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
document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".fill");
    setTimeout(function () {
        element.classList.add("active");
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

