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
// $('.a-d31').slick({
//   autoplay: false,
//   infinite: true,
//   dots: false,
//   infinite: true,
//   autoplaySpeed: 1000,
//   speed: 1000,
//   slidesToShow: 3,
//   prevArrow: `<a href="#" class="navigators1 nav-left1">
//   <i class="fas fa-angle-left" class=""></i>
// </a>`,
// nextArrow: `<a href="#" class="navigators1 nav-right1">
//   <i class="fas fa-angle-right" class=""></i>
// </a>`,
// slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         dots: false,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         autoplay: true,
//         dots: false,
//         infinite: true,
//         autoplaySpeed: 1000,
//         speed: 3000,      
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         dots: false,
//         autoplay: true,
//         infinite: true,
//         autoplaySpeed: 1000,
//         speed: 3000,      
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });
$('.youtube').grtyoutube();
				
      

function chess (n){
  const hash = '#', space = ' ', board = [];
  for(let i = 0; i<n; i++){
      if(i%2 === 0){
        for(let j =0; j<n/2; j++){
          board.push(space);
          board.push(hash);
        }
      } else {
        for(let j =0; j<n/2; j++){
          board.push(hash);
          board.push(space);
        }
      }
      board.push('\n');
  }
  console.log(board.join(''))
}
chess(10) 
/*
' # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
'

*/