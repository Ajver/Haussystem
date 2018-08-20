function delay(URL, time) {
  setTimeout(function () {
    window.location = URL
  }, time);
}

var ham = document.querySelector(".hamburger");
ham.addEventListener("click", function () {
  var pageHeader = document.querySelector(".page-header");
  pageHeader.classList.toggle("opened-nav");
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
        var yy = document.querySelector(".one-offer.opened-offer").offsetTop - 110;

        $.scrollTo(yy, 350);
      }
    }, onlyEl ? 100 : 1000);

  }, false);
}