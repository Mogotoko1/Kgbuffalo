// gallery.js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel
  const gallery = document.querySelector(".gallery-carousel");

  if (gallery && typeof jQuery !== "undefined" && typeof jQuery.fn.owlCarousel === "function") {
    $(".gallery-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  } else {
    console.warn("Owl Carousel not found or jQuery is missing.");
  }

  // Smooth scroll for in-page navigation
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top - 56 }, 600);
    }
  });

  // Scrollspy - highlight the active menu item while scrolling
  $(window).on('scroll', function () {
    let scrollPos = $(document).scrollTop();
    
    // Loop through all sections and find the one currently in view
    $('a.nav-link').each(function () {
      const target = $(this).attr('href');
      const section = $(target);

      if (section.offset().top - 57 <= scrollPos && (section.offset().top + section.outerHeight()) > scrollPos) {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
});
