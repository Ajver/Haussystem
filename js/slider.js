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

var nextSlide = function(className, isTimeout) {  
  var slides = document.getElementsByClassName(className);
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
  
  if(isTimeout) {
    window.setTimeout(nextSlide, 6000, className, isTimeout);
  }
}

nextSlide();

var prevSlide = function(className) {  
    var slides = document.getElementsByClassName(className);
    var curSlide = slides[slideIndex];

    // Removing class from last slide 
    if(slideIndex == slides.length-1) { 
        slides[0].classList.remove("active");
    }else {
        slides[slideIndex+1].classList.remove("active");
    }

    // Setting class for active slide
    curSlide.classList.add("active");

    // Next slide index
    slideIndex = (slideIndex+1) % slides.length;
}

document.querySelector('.previous-slide-btn').addEventListener('click', () => {
    prevSlide('slider-img', false);
});

document.querySelector('.next-slide-btn').addEventListener('click', () => {
    nextSlide('slider-img');
});