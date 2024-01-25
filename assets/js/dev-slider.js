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
    width: "1100px",
    autoWidth: true,
    focus: "center",
    arrows: false,
    cover: true,
    autoplay: false,
    speed: 1000,
    dragMinThreshold: {
      mouse: 1,
      touch: 1,
    },
    breakpoints: {
      1199: {
        height: "24rem",
        gap: "20px",
      },
      991: {
        height: "20rem",
        gap: "15px",
      },
      767: {
        height: "18rem",
        gap: "10px",
      },
      576: {
        height: "14rem",
        gap: "10px",
      },
    },
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
    speed: 3500,
    focus: "center",
    cover: true,
    autoWidth: true,
    dragMinThreshold: {
      mouse: 1,
      touch: 1,
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
      gap: "60px",
      autoWidth: true,
      drag: "free",
      focus: "center",
      speed: 3500,
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
      breakpoints: {
        1199: {
          gap: "45px",
          padding: "5rem",
        },
        991: {
          gap: "35px",
          padding: "0rem",
        },
        767: {
          gap: "30px",
          padding: "0rem",
        },
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
      perPage: 2,
      perMove: 1,
      padding: "28rem",
      arrows: false,
      pagination: false,
      gap: "120px",
      focus: "center",
      rewind: true,
      isNavigation: true,
      speed: 3200,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: true,
      },
      breakpoints: {
        1199: {
          gap: "85px",
          padding: "15rem",
        },
        991: {
          gap: "55px",
          perPage: 2,
          padding: "5rem",
        },
        767: {
          gap: "80px",
          padding: "5rem",
          perPage: 1,
        },
      },
    });

    splide.mount(window.splide.Extensions);
  });
});
// Wordpress Development project individual category slider - End
