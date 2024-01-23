/* Wordpress development projects slider -/Start */
document.addEventListener("DOMContentLoaded", function () {
  var category_slider = new Splide("#wp_project_category_slider", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "4rem",
    pagination: false,
    direction: "ttb",
    height: "35rem",
    autoHeight: true,
    isNavigation: true,
    focus: 'center',
    arrows: false,
    cover: true,
    autoplay: true,
    speed: 1200,
  });

  var category_project_slider = new Splide("#wp_project_slider", {
    type: "loop",
    perPage: 2,
    gap: "60px",
    padding: "8.75rem",
    pagination: false,
    arrows: false,
    autoplay: true,
    speed: 1000,
    rewind: true,
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
