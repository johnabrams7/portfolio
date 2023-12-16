$(document).ready(function () {

  
  // Jquery smooth scrolling 
  // $('a[href*="#"]')
  // // Remove links that don't actually link to anything
  // .not('[href="#"]')
  // .not('[href="#0"]')
  // .click(function(event) {
  //   // On-page links
  //   if (
  //     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  //     && 
  //     location.hostname == this.hostname
  //     &&
  //     $(window).width() > 768
  //   ) {
  //     // Figure out element to scroll to
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     // Does a scroll target exist?
  //     if (target.length) {
  //       // Only prevent default if animation is actually gonna happen
  //       event.preventDefault();
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 800, function() {
  //         // Callback after animation
  //         // Must change focus!
  //         var $target = $(target);
  //         $target.focus();
  //         if ($target.is(":focus")) { // Checking if the target was focused
  //           return false;
  //         } else {
  //           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //           $target.focus(); // Set focus again
  //         };
  //       });
  //     }
  //   }
  // });

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Front-End Developer",
      "UX Designer",
      "Technician",
      "Media Producer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-3", {
    strings: [
    "Thanks for your time.",
    "Have a good day!",
  ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Front-End Developer",
      "UX Designer",
      "Technician",
      "Media Producer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
