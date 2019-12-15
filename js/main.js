$(".slider").slick({
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
  easing: 'linear',
  prevArrow: `<a href="#" class="slider-navigators slider-nav-left">
  <i class="fas fa-angle-left" class=""></i>
  </a>`,
  nextArrow: `<a href="#" class="slider-navigators slider-nav-right">
    <i class="fas fa-angle-right" class=""></i>
  </a>`,
    autoplaySpeed: 4000,
    speed: 2000,
    swipeToSlide: true,
    lazyLoad: 'ondemand'
});

$('.tour-slider').slick({
  autoplay: true,
  infinite: true,
  dots: false,
  infinite: true,
  autoplaySpeed: 1000,
  speed: 3000,
  slidesToShow: 5,
  prevArrow: `<a href="#" class="navigators nav-left">
  <i class="fas fa-angle-left" class=""></i>
</a>`,
nextArrow: `<a href="#" class="navigators nav-right">
  <i class="fas fa-angle-right" class=""></i>
</a>`,
slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        infinite: true,
        infinite: true,
        autoplaySpeed: 1000,
        speed: 3000,      
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        infinite: true,
        infinite: true,
        autoplaySpeed: 1000,
        speed: 3000,      
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.youtube').grtyoutube();
				