(function ($) {
  "use strict";

  // stycky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll > 300) {
      $('.header').addClass('sticky-state');
    } else {
      $('.header').removeClass('sticky-state');
    }
  })

  //home slideshow
  $(".home-author > div:gt(0)").hide();

  setInterval(function () {
    $('.home-author > div:first')
      .fadeOut(700)
      .next()
      .fadeIn(700)
      .end()
      .appendTo('.home-author');
  }, 4500);

  //typed js
  var typed = new Typed('.type', {
    strings: [
      'Designer',
      'Developer',
      'Freelancer',
    ],
    loop: true, // Default value
    typeSpeed: 60,
    backSpeed: 60,
    cursorChar: '.', // Default value
  });

  // parallax JS
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  // parallax JS
  var about = document.getElementById('about-img');
  var parallaxInstance = new Parallax(about);

  //offcanvas menu
  $(".menu-trigger").click(function () {
    $(".ofcanvas-menu-overlay, .ofcanvas-menu").addClass("active")
  });

  $(".menu-close, .ofcanvas-menu-overlay").click(function () {
    $(".ofcanvas-menu-overlay, .ofcanvas-menu").removeClass("active")
  });

  //hover 3d
  $(".about").hover3d({
    selector: ".shape-paper-plane",
    sensitivity: 40,
  });

  //hover 3d
  $(".quality").hover3d({
    selector: ".shape-quality",
    sensitivity: 40,
  });

  //hover 3d
  $(".experience").hover3d({
    selector: ".shape-exp",
    sensitivity: 20,
  });

  //hover 3d
  $(".contact").hover3d({
    selector: ".shape-contact",
    sensitivity: 30,
  });

  //hover 3d
  $(".blog").hover3d({
    selector: ".shape-blog",
    sensitivity: 30,
  });

  //circle progress bar
  $('#uiux').circleProgress({
    value: 0.73,
    size: 200,
    thickness: 8,
    startAngle: 4.7,
    lineCap: "round",
    emptyFill: "#20205f",
    fill: "#6928d9",

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('span').html(Math.round(73 * progress) + '<i>%</i>');
  });

  var uiux = $('#uiux');

  uiux.appear({
    force_process: true
  });

  uiux.on('appear', function () {
    var uiux = $(this);
    if (!uiux.data('inited')) {
      uiux.circleProgress({
        value: $(this).data('value'),
      });
      uiux.data('inited', true);
    }
  });


  $('#development').circleProgress({
    value: 0.85,
    size: 200,
    thickness: 8,
    startAngle: 4.7,
    lineCap: "round",
    emptyFill: "#20205f",
    fill: " #1573ff",

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
  });

  var development = $('#development');

  development.appear({
    force_process: true
  });

  development.on('appear', function () {
    var development = $(this);
    if (!development.data('inited')) {
      development.circleProgress({
        value: $(this).data('value'),
      });
      development.data('inited', true);
    }
  });

  $('#branding').circleProgress({
    value: 0.48,
    size: 200,
    thickness: 8,
    startAngle: 4.7,
    lineCap: "round",
    emptyFill: "#20205f",
    fill: "#00ffa2",

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('span').html(Math.round(48 * progress) + '<i>%</i>');
  });

  var development = $('#branding');

  development.appear({
    force_process: true
  });

  development.on('appear', function () {
    var development = $(this);
    if (!development.data('inited')) {
      development.circleProgress({
        value: $(this).data('value'),
      });
      development.data('inited', true);
    }
  });

  $('#design').circleProgress({
    value: 0.69,
    size: 200,
    thickness: 8,
    startAngle: 4.7,
    lineCap: "round",
    emptyFill: "#20205f",
    fill: "#baff26"

  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('span').html(Math.round(69 * progress) + '<i>%</i>');
  });

  var design = $('#design');

  design.appear({
    force_process: true
  });

  design.on('appear', function () {
    var design = $(this);
    if (!design.data('inited')) {
      design.circleProgress({
        value: $(this).data('value'),
      });
      design.data('inited', true);
    }
  });

  //active experience
  $('.single-exp').hover(function () {
    $('.single-exp').removeClass("active");
    $(this).addClass("active");
  })

  //isotope js
  // init Isotope
  var $grid = $('.portfolio-wrapper').isotope({
    itemSelector: '.portfolio-item',
    percentPosition: false,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
    },
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });

  //portfolio filter items
  $('.portfolio-category').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  //fancybox js
  $('[data-fancybox="images"]').fancybox({
    protect: true,
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "tube",
  })

  //active portfolio category
  $('.portfolio-category ul li').click(function () {
    $('.portfolio-category ul li').removeClass("active");
    $(this).addClass("active");
  });

  //active member-social-profile
  $(".team-member").hover(function () {
    $('.member-social-profile').removeClass("active");
    $(this).find('.member-social-profile').addClass("active");
  });

  $('.member-social-profile ul li').hover(function () {
    $('.member-social-profile ul li').removeClass("active");
    $(this).addClass("active");
  });

  //slick js for sponsor
  $('.sponsor').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  //active footer-social
  $('.footer-social ul li').hover(function () {
    $('.footer-social ul li').removeClass("active");
    $(this).addClass("active");
  });


  //wow JS
  new WOW().init();

  //smooth scroll js
  var scroll = new SmoothScroll('a[href*="#"]');

  //gumshoe scrollspy JS
  const instance = new Gumshoe('.ofcanvas-menu-items ul li a');

})(jQuery);