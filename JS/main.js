$(document).ready(function(){

$(document).on('click', 'nav a', function(event){
  // Stop the browser from automatically jumping to the target
  event.preventDefault();

  // Get the offest location of the target element
  $('html, body').animate({
    // Smoothly Move To That Offset
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1500);

});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});
