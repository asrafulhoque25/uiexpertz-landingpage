

document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.fill');
    if (element) {
      setTimeout(function() {
        element.classList.add('active');
      }, 1000);
    } else {
      console.error('Element with class ".fill" not found');
    }
    
  });

$('.commonBtn').hover(
    function() {
      $('.icon-scale.is-1').toggleClass('class1-for-img1');
      $('.icon-scale.is-2').toggleClass('class1-for-img2');
    }
  );

// Get all tab items and content items
$(document).ready(function() {

      // custom accordion
    $(function () {
      if ($('.accordion-list').length) {
          $('.accordion-list').on('click', '.accordion-list-item', function (e) {
              e.preventDefault();
              // remove siblings activities
              $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
              $(this).closest('.accordion-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

              // add slideToggle into this
              $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
              $(this).find('.ni').toggleClass('ni-plus ni-minus');
          });
      }
  });



      

	// $('.card-wrapper .card').last().addClass('active');
	// $('.card-wrapper .card').last().prev().addClass('next');
  // // Autoplay interval 
	// let interval = 5000;
	// let myInt = setInterval(function () {
	// 							$('.card.active').trigger('click');
	// 			      }, interval);
  // // Clickable toggle
	// $('.card').on('click', function(){
	// 	clearInterval(myInt);
  //   // Prevent multiple fast clicks to break the functioning
	// 	$('.card').css({'pointer-events' : 'none'});
	// 	$('.card.active').addClass('animate-leave').removeClass('active');
	// 	$('.card.next').addClass('active').removeClass('next');
	// 	$('.card-wrapper .card').last().prev().prev().addClass('next');
	// 	setTimeout( function(){ 
	// 		$('.card.animate-leave').addClass('animate-back').removeClass('animate-leave');
	// 		$('.card-wrapper').prepend( $('.animate-back') );
	// 	}, 300); // Wait for the animation to end
	// 	setTimeout( function(){ 
	// 		$('.card.animate-back').removeClass('animate-back');
	// 		$('.card').css({'pointer-events' : 'auto'});
	// 		clearInterval(myInt);
	// 		myInt = setInterval(function () {
	// 			$('.card.active').trigger('click');
	// 		}, interval);
	// 	}, 700);
	// });

  // // Just for fun
	// $('.polaroid-style').on('click', function(){
	// 	$('.card').toggleClass('polaroid')
	// });


// =============================  CAROUSEL  ============================ //

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

// =============================== Particles =============================== //

particlesJS("particles-js", {
	particles: {
		number: {
			value: 400,
			density: {
				enable: true,
				value_area: 2800
			}
		},
		color: {
			value: "#FFFFFF"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0.5,
				color: "#152166"
			},
			image: {
				src: "",
				width: 1,
				height: 1
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false
			}
		},
		size: {
			value: 2,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 80,
			color: "#3c2876",
			opacity: 0,
			width: 0
		},
		move: {
			enable: true,
			speed: 0.1,
			direction: "none",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 1000,
				rotateY: 2200
			}
		}
	}
});




  });
  




// Splide slider activator.

/* =========== Services Two Slider ===========*/
//Services slider 1
document.addEventListener('DOMContentLoaded', function () {
  let splideElements = document.querySelectorAll('#slider1');

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
      });

      splide.mount(window.splide.Extensions);
  });
});

//Services slider 2
document.addEventListener('DOMContentLoaded', function () {
  let splideElements = document.querySelectorAll('#slider2');

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
      });

      splide.mount(window.splide.Extensions);
  });
});


//Text slide - start
document.addEventListener('DOMContentLoaded', function () {
  let splideElements = document.querySelectorAll('#slider3');

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



      // // Function to handle scroll event
      // function handleScroll() {
      //   // Get the scroll position
      //   const scrollTop = window.scrollY - 300;
        
      //   // Calculate blur amount based on scroll position
      //   const blurValue = (scrollTop / 100) * 2; // You can adjust the factor for blur effect
        
      //   // Apply blur using GSAP to the banner section
      //   gsap.to('.banner', { filter: `blur(${blurValue}px)`, ease: 'power4.out' });
      // }
    
      // // Listen for scroll event and call the handleScroll function
      // window.addEventListener('scroll', handleScroll);
    
});




// Splide slider activator.



// product slider

// new Splide("#curvedSlider", {
//     type: "loop",
//     drag: "free",
//     perPage: 2,
//     padding: '10rem',
//     gap: "4rem",
//     height: "auto",
//     arrows: false,
//     pagination: false,
//     autoScroll: {
//         speed: -1,
//       },
//     breakpoints: {
//       991: {
//         perPage: 2,
//         gap: "2rem",
//       },
//     },
//   }).mount(window.splide.Extensions);


  


  //partners carousel

     // gsap code 

        // First, create your GSAP timeline
        const tl = gsap.timeline({
            defaults: {
                duration: .50,
                ease: "power3.easeOut"
            }
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
            scrub: true
        });
        tl.fromTo(
            ".common-title-animation",
            { y: "100%", opacity: 0.2 },
            { y: "0%", opacity: 1 }
        );

        // Use ScrollTrigger to trigger the animation on scroll
        ScrollTrigger.create({
            animation: tl,
            trigger: ".common-title-animation",
            start: "top 90%",
            end: "bottom 60%",
            scrub: true
        });


  
  // animation
  // let scene = document.getElementById('js-scene1');
  // let parallax = new Parallax(scene);
  // let scene = document.getElementById('js-scene2');
  // let parallax = new Parallax(scene);


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
				top: posY - 20
			}
		});

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
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




//smooth scrolling



//gsap scroll


//Partners Carousel - Start
document.addEventListener('DOMContentLoaded', function () {
  let splideElements = document.querySelectorAll('#partnersCarousel');

  splideElements.forEach(function (element) {
      let splide = new Splide(element, {
        type   : 'loop',
        perPage: 5,
        perMove: 1,
        arrows: false,
        pagination: false,
        height: '27.5rem',
        drag: 'free',
        autoScroll: {
            speed: 0.6,
            pauseOnHover: false,
        },

      });

      splide.mount(window.splide.Extensions);
  });
});
//Partners Carousel - Start


// FAQ Accordion slider - Start 
document.addEventListener('DOMContentLoaded', function () {
  let splideElements = document.querySelectorAll('#faq-accordion');

  splideElements.forEach(function (element) {
      let splide = new Splide(element, {
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
        
      });

      splide.mount(window.splide.Extensions);
  });
});
// FAQ Accordion slider - End


// Mission & Vision slider - Start 
document.addEventListener('DOMContentLoaded', function () {
    let splideElements = document.querySelectorAll('#missionVisionSlide');

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type   : 'loop',
            direction: 'ttb',
            perPage: 1,
            perMove: 1,
            padding: '20rem',
            arrows: false,
            pagination: false,
            gap: "1.54rem",
            autoplay: true,
            autoHeight: true,
            height    : '32rem',
            focus: 'center',
        });

        splide.mount();
    });
});
// Mission & Vision slider - End


//Copyright year print
document.getElementById("year").innerHTML = new Date().getFullYear();



//cta 
gsap.registerPlugin(ScrollTrigger);


gsap.to("#call-left-shape", {
  scrollTrigger: {
    trigger: "#call-left-shape",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false // Corrected property name to 'markers'
  },
  // Other animation properties
    y:-330,
    x: -100,
    rotation: 360,
});
gsap.to("#call-right-shape", {
  scrollTrigger: {
    trigger: "#call-right-shape",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false // Corrected property name to 'markers'
  },
  // Other animation properties
    // y:-330,
    // x: -100,
    rotation: 360,
});






let typeSplit;

// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-word", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}


// Register GSAP plugins
runSplit();


gsap.registerPlugin(ScrollTrigger);

// Create staggered animation
function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tll = gsap.timeline({
    scrollTrigger: {
      trigger: ".split-word",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });

  tll.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 0.5
  });
}


//testimonial



document.addEventListener( 'DOMContentLoaded', function () {
  let main = new Splide( '#client_testimonial', {
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

  let thumbnails = new Splide( '#testimonialThumbnails', {
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



// Pricing section 
document.addEventListener( 'DOMContentLoaded', function () {
  let priceTableWrap = new Splide( '#pricingTable', {
    autoHeight: true,
    type: 'loop',
    rewind: true,
    gap: "4rem",
    speed: 1500,
    focus: 'center',
    pagination: false,
    arrows: false,
    perPage: 1,
  } );

  let priceTitleSlide = new Splide( '#tabslider', {
    direction: 'ttb',
    height   : '8.5rem',
    type: 'loop',
    rewind: true,
    focus: 'center',
    wheel    : true,
    pagination: false,
    perPage: 3,
    focus  : 'center',
  } );

  priceTableWrap.sync( priceTitleSlide );
  priceTableWrap.mount();
  priceTitleSlide.mount();
} );


// Cursor animation.


// Cursor JS - Start


// Cursor JS - End





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



//quote 

gsap.registerPlugin(ScrollTrigger);

gsap.to("#animated-path", {
  duration: 0.5,
  fill: "#5648FF", // Fill color when animation starts
  scrollTrigger: {
    trigger: "#trigger",
    start: "50% 60%",
    end: "50% 0%",
    scrub: false,
    markers:false,
  }
});

