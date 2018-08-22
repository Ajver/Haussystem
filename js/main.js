
window.addEventListener("load", function(e) {
  
  window.setTimeout(function() {
    var pageHeader = document.querySelector(".page-header");
    var aboutUs = document.querySelector(".about-us");
    var offers = document.querySelector(".offers");
    var footer = document.querySelector(".page-footer");

    window.setTimeout(function() {
       pageHeader.classList.add("slideInLeft");
    }, 100);

    window.setTimeout(function() {
       aboutUs.classList.add("slideInLeft");
    }, 200);

    window.setTimeout(function() {
       offers.classList.add("slideInLeft");
    }, 300);

    window.setTimeout(function() {
       footer.classList.add("slideInLeft");
    }, 400);
  }, 1000);
  
  
  
}, false);

document.getElementById("about-us-btn").addEventListener("click", function () {
  scrollToSection(document.querySelector('.about-us').offsetTop - 120);
}, false);
document.getElementById("offer-btn").addEventListener("click", function () {
  scrollToSection(document.querySelector('.offers').offsetTop - 120);
}, false);
document.getElementById("contact-btn").addEventListener("click", function () {
  scrollToSection(document.querySelector('.page-footer').offsetTop - 120);
}, false);

var scrollToSection = function (yy) {
  $.scrollTo(yy, 500);
  var pageHeader = document.querySelector(".page-header");
  pageHeader.classList.remove("opened-nav");
  
  var menuBtns = document.getElementsByClassName("menu-btn");
  
  for(var i=0; i<menuBtns.length; i++) {
    menuBtns.item(i).classList.remove("slideInDown");
  }
}

var ham = document.querySelector(".hamburger");
ham.addEventListener("click", function () {
  var pageHeader = document.querySelector(".page-header");
  pageHeader.classList.toggle("opened-nav");
  
  var menuBtns = document.getElementsByClassName("menu-btn");
  
  for(var i=0; i<menuBtns.length; i++) {
    menuBtns.item(i).classList.toggle("slideInDown");
  }
}, false);

var offer = document.getElementsByClassName("one-offer");

for (let i = 0; i < offer.length; i++) {
  offer[i].addEventListener("click", function () {
    var otherOffers = document.getElementsByClassName("one-offer");

    var onlyEl = true;

    for (var j = 0; j < otherOffers.length; j++) {
      if (j !== i) {
        if (otherOffers[j].classList.contains("opened-offer")) {
          otherOffers[j].classList.remove("opened-offer");
          onlyEl = false;
        }
      }
    }

    this.classList.toggle("opened-offer");

    window.setTimeout(function () {
      if (document.querySelector(".one-offer.opened-offer") !== null) {
        var yy = document.querySelector(".one-offer.opened-offer").offsetTop - 120;

        $.scrollTo(yy, 350);
      }
    }, onlyEl ? 100 : 700);

  }, false);
}