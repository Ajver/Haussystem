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

