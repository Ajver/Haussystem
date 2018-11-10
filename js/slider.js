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

var nextSlide = function(className, isTimeout, si) {  
  var slides = document.getElementsByClassName(className);
  si = (si+slides.length) % slides.length;
  
  var curSlide = slides[si];
  
  
  // Removing class from last slide 
  if(si == 0) { 
    slides[slides.length-1].classList.remove("active");
  }else {
    slides[si-1].classList.remove("active");
  }
  
  // Setting class for active slide
  curSlide.classList.add("active");
  
  if(isTimeout) {
    window.setTimeout(() => {
        nextSlide(className, isTimeout, si+1);
    }, 6000);
  }

  return si;
}

nextSlide('header-slider-img', true, 0);

var prevSlide = function(className) {  
    var slides = document.getElementsByClassName(className);
    var curSlide = slides[slideIndex];

    console.log(slides);
    console.log('SI: ' + slideIndex);

    if(slideIndex == 0) { 
        slides[slides.length-1].classList.add("active");
    }else {
        slides[slideIndex-1].classList.add("active");
    }

    // Setting class for active slide
    curSlide.classList.remove("active");
}

let slideIndex = 0;

document.querySelector('.previous-slide-btn').addEventListener('click', () => {
    // --slideIndex;
    // prevSlide('slider-img');
    slideIndex = nextSlide('slider-img', false, slideIndex-1);
});

document.querySelector('.next-slide-btn').addEventListener('click', () => {
    slideIndex = nextSlide('slider-img', false, slideIndex+1);
});