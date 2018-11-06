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

var scrollToSection = function (yy) {
  $.scrollTo($(yy).offset().top - 80, 500);
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

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    removeModal();
  }

  //  var body = document.querySelector("body")
  //  
  //  if(body.classList.contains("modal-active")) {
  //    body.classList.remove("modal-active");
  //  }
})
$(".arrow").click(function () {
  $.scrollTo(".main-nav", 500);
});