window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
}, false);

document.getElementById("about-us-btn").addEventListener("click", function () {
  scrollToSection('.about-us');
}, false);
document.getElementById("offer-btn").addEventListener("click", function () {
  scrollToSection('.offers');
}, false);
document.getElementById("contact-btn").addEventListener("click", function () {
  scrollToSection('.page-footer');
}, false);
document.getElementById("implementations-btn").addEventListener("click", function () {
  scrollToSection('.implementations');
}, false);

var scrollToSection = function (target) {
  $.scrollTo($(target).offset().top - 80, 500);
  var pageHeader = document.querySelector(".page-header");
  pageHeader.classList.remove("opened-nav");

  var menuBtns = document.getElementsByClassName("menu-btn");

  for (var i = 0; i < menuBtns.length; i++) {
    menuBtns.item(i).classList.remove("slideInDown");
  }
}

var ham = document.querySelector(".hamburger");
ham.addEventListener("click", function () {
  var pageHeader = document.querySelector(".page-header");
  pageHeader.classList.toggle("opened-nav");

  var menuBtns = document.getElementsByClassName("menu-btn");

  for (var i = 0; i < menuBtns.length; i++) {
    menuBtns.item(i).classList.toggle("slideInDown");
  }
}, false);

let offer = document.querySelectorAll(".one-offer > header");

offer.forEach((element, index) => {
  element.addEventListener("click", function () {
    let otherOffers = document.getElementsByClassName("one-offer");

    let onlyEl = true;

    for (let j = 0; j < otherOffers.length; j++) {
      if (j !== index) {
        if (otherOffers[j].classList.contains("opened-offer")) {
          otherOffers[j].classList.remove("opened-offer");
          onlyEl = false;
        }
      }
    }

    otherOffers[index].classList.toggle("opened-offer");

    window.setTimeout(function () {
      if (document.querySelector(".one-offer.opened-offer") !== null) {
        let offY = window.innerWidth <= 810 ? -100 : document.querySelector('.page-header').clientHeight;
        let yy = document.querySelector(".one-offer.opened-offer").offsetTop + offY - 20;
          
        $.scrollTo(yy, 350);
      }
    }, onlyEl ? 100 : 1400);

  }, false);
});

let offerPart = document.querySelectorAll(".one-offer section > header");

offerPart.forEach((element, index) => {
  element.addEventListener('click', () => {
    let sections = document.getElementsByClassName("offer-part");
    let onlyEl = true;

    for (let j = 0; j < sections.length; j++) {
      if (j !== index) {
        if (sections[j].classList.contains("opened-offer")) {
          sections[j].classList.remove("opened-offer");
          onlyEl = false;
        }
      }
    }

    sections[index].classList.toggle("opened-offer");

    window.setTimeout(function () {
      let openedOffPart = document.querySelector(".one-offer section.opened-offer");
      if (openedOffPart !== null) {
        let offY = window.innerWidth <= 810 ? -100 : document.querySelector('.page-header').clientHeight;
        let yy = openedOffPart.offsetTop + offY - 20;

        $.scrollTo(yy, 350);
      }
    }, onlyEl ? 100 : 1400);
  });
});

$(".arrow").click(function () {
  $.scrollTo(".main-nav", 500);
});
