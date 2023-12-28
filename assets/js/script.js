$('.btn-info').hover(
    function() {
      $('.icon-scale.is-1').toggleClass('class1-for-img1');
      $('.icon-scale.is-2').toggleClass('class1-for-img2');
    }
  );

// Get all tab items and content items
$(document).ready(function() {
    function syncTabs() {
        var activeTabIndex = $('.splide__list .splide__slide.active').index();
        $('.tab-content .tab-content-item').removeClass('d-block');
        $('.tab-content .tab-content-item').eq(activeTabIndex).addClass('d-block');
      }
  
      // Synchronize on page load
      syncTabs();
  });
  
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




// Splide slider activator.





new Splide( '#testimonialSlider', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    arrows: true,
    pagination: false,
    gap: '2rem',
} ).mount();