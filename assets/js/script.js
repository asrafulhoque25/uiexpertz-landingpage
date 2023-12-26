/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - Asraful Hoque
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here
    // button effect
    // execute : on hover
    $(function () {
        document.querySelectorAll('.button-effect').forEach(function (button) {
            button.innerHTML = '<div><span>' + button.textContent.split(' ').join('</span> <span>') + '</span></div>'
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

$(document).ready(function () {

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });


    // tooltip animation
    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);

    //shape animation


    

});
