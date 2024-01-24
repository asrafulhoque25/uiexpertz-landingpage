/* Wordpress development projects slider -/Start */
document.addEventListener("DOMContentLoaded", function () {
  var category_slider = new Splide("#wp_project_category_slider", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "30px",
    pagination: false,
    direction: "ttb",
    height: "36rem",
    wheel: true,
    isNavigation: true,
    focus: "center",
    arrows: false,
    cover: true,
    autoplay: false,
    speed: 170,
    // waitForTransition: false,
  });

  var category_project_slider = new Splide("#wp_project_slider", {
    type: "loop",
    perPage: 1,
    gap: "60px",
    pagination: false,
    arrows: false,
    autoplay: false,
    rewind: true,
    speed: 1500,
    focus: "center",
    cover: true,
    autoWidth: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
  });

  category_slider.sync(category_project_slider);
  category_slider.mount();
  category_project_slider.mount();
});
/* Wordpress development projects slider -/End */

// Wordpress Development project individual category slider - Start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(
    "#wp_project_individual_category_slider"
  );

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 2,
      perMove: 1,
      padding: "10rem",
      arrows: false,
      pagination: false,
      gap: "1.54rem",
      autoWidth: true,
      drag: "free",
      focus: "center",
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
    });

    splide.mount(window.splide.Extensions);
  });
});
// Wordpress Development project individual category slider - End

// Wordpress Development project individual category slider - Start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#wp_why_choose_slider");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      padding: "18rem",
      arrows: false,
      pagination: false,
      gap: "80px",
      focus: "center",
      rewind: true,
      isNavigation: true,
      speed: 1200,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: true,
      },
    });

    splide.mount(window.splide.Extensions);
  });
});
// Wordpress Development project individual category slider - End
