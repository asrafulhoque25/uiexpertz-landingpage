


gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// Images parallax
gsap.utils.toArray('.img-container').forEach(container => {
  const img = container.querySelector('img');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    }
  });

  tl.fromTo(img, {
    yPercent: -5,
    ease: 'none'
  }, {
    yPercent: 5,
    ease: 'none'
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".fill");
  if (element) {
    setTimeout(function () {
      element.classList.add("active");
    }, 1000);
  } 

  // all gsap code here

  // gsap code

  // Find the element with the target class
  var targetElement = document.querySelector(".inventions-area");
  if (targetElement) {
    // First, create your GSAP timeline
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.easeOut",
      },
    });

    // Define the animation within the timeline
    tl.fromTo(
      ".spl-title",
      { y: "100%", opacity: 0.2 },
      { y: "0%", opacity: 1 }
    );

    // Use ScrollTrigger to trigger the animation on scroll
    ScrollTrigger.create({
      animation: tl,
      trigger: ".spl-title",
      start: "top 80%",
      end: "bottom 40%",
      markers: false,
      scrub: true,
    });
  }
  // Find the element with the target class
  var targetElement = document.querySelector(".partners-carousel-area");
  if (targetElement) {
    const tl2 = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power3.easeOut",
      },
    });
    tl2.fromTo(
      ".common-title-animation",
      { y: "100%", opacity: 0.2 },
      { y: "0%", opacity: 1 }
    );

    // Use ScrollTrigger to trigger the animation on scroll
    ScrollTrigger.create({
      animation: tl2,
      trigger: ".common-title-animation",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true,
    });
  }

  // Find the element with the target class
  var targetElement3 = document.querySelector(".call-to-action");

  // Check if the element was found
  if (targetElement3) {
    // Execute your JavaScript code here

    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#call-left-shape", {
      scrollTrigger: {
        trigger: "#call-left-shape",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      y: -330,
      x: -100,
      rotation: 360,
    });
    gsap.to("#call-right-shape", {
      scrollTrigger: {
        trigger: "#call-right-shape",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      rotation: 360,
    });
  }


  //title left to right 
  var targetElement3 = document.querySelector(".project-overview");
  if (targetElement3) {
    // Execute your JavaScript code here

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".projecttitle-overview", {
      scrollTrigger: {
        trigger: ".projecttitle-overview",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      x: $(window).width() > 1000 ? "300" : "100",
    });

  }
  //title left to right 
  var styleguide = document.querySelector(".commonsec");
  if (styleguide) {
    // Execute your JavaScript code here

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".common-space", {
      scrollTrigger: {
        trigger: ".common-space",
        start: "top 80%",
        end: "bottom 0%",
        scrub: true,
        markers: false,
      },
      x: $(window).width() > 1000 ? "300" : "100",
    });

  }
  // overview img
  var targetElement19 = document.querySelector(".overviewImg");
  if (targetElement19) {
    gsap.to(".overviewImg", {
      duration: 70, rotation: 1000, transformOrigin: "50% 50%", repeat: -1
  });
  

  }
  // scroll zoom image
  var casestudy = document.querySelector(".case-details");
  if (casestudy) {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#grow",
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.out"
      }
    });
    growTl.to("#grow", {
      duration: 1,
      scale: 1
    });
    growTl.to("#grow-tagline", {
      duration: 0.4,
      delay: -0.7,
      opacity: 1,
      y: 0
    });
    
    const shrinkTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#shrink",
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.in"
      }
    });
    
    shrinkTl.to("#shrink", {
      duration: 2,
      scale: 0.8,
      filter: "blur(0px)"
    });
    shrinkTl.to("#shrink-tagline", {
      duration: 0.4,
      delay: -0.7,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    });
    

  }

  // Find the element with the target class
  var award = document.querySelector(".award-winning-area");

  // Check if the element was found
  if (award) {
    gsap.registerPlugin(ScrollTrigger);

    const rotatingElement = document.querySelector('.award-winning-section-img');
  
    gsap.to(rotatingElement, {
      rotation: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: rotatingElement,
        start: 'top 50%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        scrub: true,
      },
    });
  }
  // Find the element with the target class
  var award = document.querySelector(".faq");

  // Check if the element was found
  if (award) {
    gsap.registerPlugin(ScrollTrigger);

    const rotatingElement = document.querySelector('.faqshape');
  
    gsap.to(rotatingElement, {
      rotation: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: rotatingElement,
        start: 'top 50%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        scrub: true,
      },
    });
  }



  $(window).scroll(function() {

  var mission = document.querySelector(".mission-vision-area");
  if (mission) {
  var $window = $(window),
      $panel = $('.section');
  var scroll = $window.scrollTop() + ($window.height() / 4);
	$('.section').removeClass('active');
  $panel.each(function () {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $this.addClass('active');
    }
  });    
  }

}).scroll();


  
// faq section faq-section-title

// Find the element with the target class
var targetElement4 = document.querySelector(".faq-section-title");
if (targetElement4) {
  let typeSplit;

  // Split the text up
  function runSplit() {
    typeSplit = new SplitType(".split-word", {
      types: "lines, words",
    });
    $(".word").append("<div class='line-mask'></div>");
    createAnimation();
  }

  // Register GSAP plugins
  runSplit();

  gsap.registerPlugin(ScrollTrigger);
  function createAnimation() {
    let allMasks = $(".word")
      .map(function () {
        return $(this).find(".line-mask");
      })
      .get();

    let tll = gsap.timeline({
      scrollTrigger: {
        trigger: ".split-word",
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tll.to(allMasks, {
      width: "0%",
      duration: 1,
      stagger: 0.5,
    });
  }
}




// text scroll animation start
var textscroll = document.querySelector(".text-scroll-animation");
if (textscroll) {
  gsap.registerPlugin(ScrollTrigger);

  let tl12 = gsap.timeline();
  tl12.to("#scrollingText", {
    x:$(window).width() > 1400 ? "1000" : $(window).width()< 991  ? "400" : "800" ,
    duration:10,
    // repeat:-1,
    ease:'linear'
  })
  let tl13 = gsap.timeline();
  tl13.to('#scrollingText', {
    xPercent: $(window).width() > 1300 ? "-15" : $(window).width()< 1100  ? "-25" : "-20" ,
    scrollTrigger:{
      trigger:"#scrollingText",
      scrub:1
    }
  })
  
}

// text scroll animation 1 start
var textscroll1 = document.querySelector(".scrollTextAnimation");
if (textscroll1) {
  gsap.registerPlugin(ScrollTrigger);

  let tl12 = gsap.timeline();
  tl12.to("#scrollingText1", {
    x:-500,
    duration:50,
    // repeat:-1,
    ease:'linear'
  })
  let tl13 = gsap.timeline();
  tl13.to('#scrollingText1', {
    xPercent: 20,
    scrollTrigger:{
      trigger:"#scrollingText1",
      scrub:1
    }
  })
  
}

// text scroll animation 1 start
var textscroll2 = document.querySelector(".scrollTextAnimation");
if (textscroll2) {
  gsap.registerPlugin(ScrollTrigger);

  let tl12 = gsap.timeline();
  tl12.to("#scrollingText2", {
    x:$(window).width() > 1400 ? "1000" : $(window).width()< 991  ? "400" : "800" ,
    duration:50,
    // repeat:-1,
    ease:'linear'
  })
  let tl13 = gsap.timeline();
  tl13.to('#scrollingText2', {
    xPercent: -20,
    scrollTrigger:{
      trigger:"#scrollingText1",
      scrub:1
    }
  })
  
}

// text scroll animation end




//quote

var targetElement6 = document.querySelector(".client-testimonial");
if (targetElement6) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#animated-path", {
    duration: 0.5,
    fill: "#5648FF", // Fill color when animation starts
    scrollTrigger: {
      trigger: "#trigger",
      start: "50% 60%",
      end: "50% 0%",
      scrub: false,
      markers: false,
    },
  });
}

});

$(".commonBtn").hover(function () {
  $(".icon-scale.is-1").toggleClass("class1-for-img1");
  $(".icon-scale.is-2").toggleClass("class1-for-img2");
});

// Get all tab items and content items
$(document).ready(function () {
  // custom accordion
  $(function () {
    if ($(".accordion-list").length) {
      $(".accordion-list").on("click", ".accordion-list-item", function (e) {
        e.preventDefault();
        // remove siblings activities
        $(this)
          .closest(".accordion-list-item")
          .siblings()
          .removeClass("open")
          .find(".accordion-desc")
          .slideUp();
        $(this)
          .closest(".accordion-list-item")
          .siblings()
          .find(".ni")
          .addClass("ni-plus")
          .removeClass("ni-minus");

        // add slideToggle into this
        $(this)
          .closest(".accordion-list-item")
          .toggleClass("open")
          .find(".accordion-desc")
          .slideToggle();
        $(this).find(".ni").toggleClass("ni-plus ni-minus");
      });
    }
  });



  // Find the element with the target class
  var targetElement1 = document.querySelector(".desktop-wrapper");
  if (targetElement1) {
    const carouselList = document.querySelector(".carousel__list");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const elems = Array.from(carouselItems);
    let intervalId;
    carouselList.addEventListener("click", function (event) {
      let newActive = event.target;
      let isItem = newActive.closest(".carousel__item");

      if (!isItem || newActive.classList.contains("carousel__item_active")) {
        return;
      }
      update(newActive);
      resetInterval();
    });

    function update(newActive) {
      const newActivePos = newActive.dataset.pos;

      const current = elems.find(function (elem) {
        return elem.dataset.pos == 0;
      });
      const prev = elems.find(function (elem) {
        return elem.dataset.pos == -1;
      });
      const next = elems.find(function (elem) {
        return elem.dataset.pos == 1;
      });
      const first = elems.find(function (elem) {
        return elem.dataset.pos == -2;
      });
      const last = elems.find(function (elem) {
        return elem.dataset.pos == 2;
      });

      current.classList.remove("carousel__item_active");

      [current, prev, next, first, last].forEach(function (item) {
        let itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos);
      });
    }

    function getPos(current, active) {
      const diff = current - active;

      if (Math.abs(current - active) > 2) {
        return -current;
      }
      return diff;
    }
    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(autoChangeSlide, 20000);
    }
    function autoChangeSlide() {
      const current = elems.find(function (elem) {
        return elem.dataset.pos == 0;
      });
      const next = elems.find(function (elem) {
        return elem.dataset.pos == 1;
      });
      if (next) {
        update(next);
      } else {
        update(elems[0]);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        const current = elems.find(function (elem) {
          return elem.dataset.pos == 0;
        });
        const prev = elems.find(function (elem) {
          return elem.dataset.pos == -1;
        });
        if (prev) {
          update(prev);
          resetInterval();
        }
      } else if (event.key === "ArrowRight") {
        const current = elems.find(function (elem) {
          return elem.dataset.pos == 0;
        });
        const next = elems.find(function (elem) {
          return elem.dataset.pos == 1;
        });
        if (next) {
          update(next);
          resetInterval();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    resetInterval();
  }

  // ==============================  HERO SPARKLE TEXT  ============================= //

  let index = 0,
    interval = 1000;
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const animate = (star) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };
  for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
      animate(star);
      setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
  }

});

// Splide slider activator.

/* =========== Services Two Slider ===========*/
//Services slider 1
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#slider1");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
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
      breakpoints: {
        776: {
          height: "45rem",
        },
      }
    });

    splide.mount(window.splide.Extensions);
  });
});

//Services slider 2
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#slider2");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
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
      breakpoints: {
        776: {
          height: "45rem",
        },
      }
    });

    splide.mount(window.splide.Extensions);
  });
});


//workingprocess slider 

document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#workingprocess");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      drag: "free",
      perPage: 3,
      gap: "1.875rem",
      direction: "ttb",
      height: "45rem",
      arrows: false,
      pagination: false,
      focus: "center",
      autoScroll: {
        speed: 1,
      },
      breakpoints: {
        776: {
          height: "40rem",
        },
        600: {
          height: "35rem",
        }
      }
    });

    splide.mount(window.splide.Extensions);
  });
});

//Text slide - start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#slider3");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      drag: "free",
      perPage: 3,
      gap: "2.5rem",
      height: "6rem",
      focus: "center",
      autoWidth: true,
      arrows: false,
      pagination: false,

      autoScroll: {
        speed: 1.3,
        pauseOnHover: true,
      },
    });

    splide.mount(window.splide.Extensions);
  });
});
//Text slide - end

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


// gsap hover animation

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
const card = document.querySelectorAll(".Pcard");

let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.02, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

card.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    follower.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    follower.classList.remove("active");
  });
});

//gsap scroll

//Partners Carousel - Start
//Partners Carousel - Start
//Partners Carousel - Start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#partnersCarousel");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      arrows: false,
      pagination: false,
      padding: "180px",
      height: "27.5rem",
      drag: "free",
      grid: {
        rows: 2,
        cols: 4,
      },
      autoScroll: {
        speed: 0.6,
        pauseOnHover: false,
      },
      breakpoints: {
        991: {
          padding: "50px",
          grid: {
            rows: 2,
            cols: 2,
          },
        },
        575: {
          padding: "0px",
          grid: {
            rows: 2,
            cols: 2,
          },
        },
      }
    });

    splide.mount(window.splide.Extensions);
  });
});
//Partners Carousel - Start
//Partners Carousel - Start
//Partners Carousel - Start

// FAQ Accordion slider - Start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#faq-accordion");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      direction: "ttb",
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
      drag: "free",
      autoHeight: true,
      height: "36rem",
      wheel: true,
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
   
    });

    splide.mount(window.splide.Extensions);
  });
});
// FAQ Accordion slider - End

// Mission & Vision slider - Start
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll("#missionVisionSlide");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      direction: "ttb",
      perPage: 1,
      perMove: 1,
      padding: "20rem",
      arrows: false,
      pagination: false,
      gap: "1.54rem",
      autoplay: true,
      autoHeight: true,
      height: "32rem",
      focus: "center",
    });

    splide.mount();
  });
});
// Mission & Vision slider - End

//Copyright year print
document.getElementById("year").innerHTML = new Date().getFullYear();

//cta


//testimonial

document.addEventListener("DOMContentLoaded", function () {
  let main = new Splide("#client_testimonial", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "4rem",
    pagination: $(window).width() > 767 ? "false" : "true",
    direction: $(window).width() > 767 ? "ttb" : "ltr" ,
    height:$(window).width() > 1300 ? "32rem" : $(window).width()< 1100  ? "27rem" : "39rem" , 
    autoHeight: true,
    arrows: false,
    cover: true,
    autoplay: true,
    speed: 1200,
  });

  let thumbnails = new Splide("#testimonialThumbnails", {
    type: "loop",
    perPage: 4,
    gap: "1.875rem",
    padding: "8.75rem",
    pagination: false,
    arrows: true,
    autoplay: true,
    speed: 1000,
    rewind: true,
    isNavigation: true,
    focus: "center",
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      991: {
        perPage: 3,
        padding: "2.75rem",
      },
      667: {
        perPage: 2,
        padding: "0.75rem",
      },
    }
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

// Pricing section
document.addEventListener("DOMContentLoaded", function () {
  let priceTableWrap = new Splide("#pricingTable", {
    autoHeight: true,
    type: "loop",
    rewind: true,
    gap: "4rem",
    speed: 1500,
    focus: "center",
    pagination: false,
    arrows: false,
    perPage: 1,
  });

  let priceTitleSlide = new Splide("#tabslider", {
    direction: "ttb",
    height: "8.5rem",
    type: "loop",
    rewind: true,
    focus: "center",
    isNavigation: true,
    wheel: true,
    pagination: false,
    perPage: 3,
    focus: "center",
  });

  priceTableWrap.sync(priceTitleSlide);
  priceTableWrap.mount();
  priceTitleSlide.mount();
});

// Cursor animation

// Cursor JS - Start

// Cursor JS - End

//Invention slider
document.addEventListener("DOMContentLoaded", function () {
  let invention_inner = document.querySelectorAll("#invention_inner_slider");

  invention_inner.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 2,
      perMove: 1,
      gap: "2rem",
      pagination: false,
      arrows: false,
      padding: "7rem",
      drag: "free",
      autoScroll: {
        speed: 0.9,
        pauseOnHover: true,
      },
      breakpoints: {
        991: {
          perPage: 2,
          padding: "0rem",
        },
        667: {
          perPage: 2,
          padding: "0.75rem",
          gap: "1rem",
        },
        576: {
          perPage: 1,
          padding: "3.75rem",
          gap: "1rem",
        },
      }
    });

    splide.mount(window.splide.Extensions);
  });
});

var targetElement5 = document.querySelector(".inventions-area");
if (targetElement5) {
  // Invention inner Scroller slider
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("area-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  // image parallax

  VanillaTilt.init(document.querySelectorAll(".invention-inner-slide-item"), {
    reverse: true,
    max: 5,
    perspective: 10,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1,
    speed: 30,
    transition: true,
    axis: null,
    glare: false,
    "max-glare": 1,
    "glare-prerender": false,
    "mouse-event-element": null,
    reset: true,
    "reset-to-start": true,
  });
}




// animation
const banner = document.querySelector(".banner");
if (banner) {
  let scene = document.getElementById("js-scene1");
  let parallax = new Parallax(scene);
} 

// let scene = document.getElementById('js-scene2');
// let parallax = new Parallax(scene);


//navbar


// hamburger menu
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 100) {
    $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

$(document).ready(function () {

  $('.hamburger').click(function () {
    $(this).toggleClass("is-active");
    $('body').toggleClass('body-active');
    $('.navbar').toggleClass('hamburger-fixed');
    $('html').toggleClass('no-js lenis lenis-smooth lenis-scrolling');
  });

});
