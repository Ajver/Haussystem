var header = document.querySelector('.page-header');

//header.style.backgroundImage = "url(img/3.jpg)";

$(document).ready(function() {
    $(window).scroll(mainNavSticky);
    $(window).resize(mainNavSticky);
});

const mainNavSticky = () => {
    var NavY = $('.container').offset().top - 80;
    var ScrollY = $(window).scrollTop();

    if (ScrollY > NavY) {
        $('.main-nav').addClass('sticky');
    } else {
        $('.main-nav').removeClass('sticky');
    }

    document.querySelector(".page-header .slider").style.top = ScrollY/2 + "px";
}

var slideIndex = 0;

var nextSlide = function() {  
  var slides = document.getElementsByClassName("header-slider-img");
  var curSlide = slides[slideIndex];
  
  // Removing class from last slide 
  if(slideIndex == 0) { 
    slides[slides.length-1].classList.remove("active");
  }else {
    slides[slideIndex-1].classList.remove("active");
  }
  
  // Setting class for active slide
  curSlide.classList.add("active");
  
  // Next slide index
  slideIndex = (slideIndex+1) % slides.length;
  
  
  window.setTimeout(nextSlide, 6000);
}

nextSlide();


