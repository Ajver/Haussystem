var header = document.querySelector('.page-header');

//header.style.backgroundImage = "url(img/3.jpg)";

$(document).ready(function() {
    $(window).scroll(function() {
        var NavY = $('.container').offset().top - 80;
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');
        }

        //document.querySelector(".page-header").style.top = -ScrollY/5 + "px";
    });
});