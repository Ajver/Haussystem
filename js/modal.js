
var showModalOffer = function(offer) {
  var body = document.querySelector('body');

  var modal = document.createElement("div");
  var closeBtn = document.createElement("div"); 
  modal.classList.add("modal");
  body.classList.add("modal-active");
  
  closeBtn.classList.add("modal-close-btn");
  closeBtn.innerHTML = "Zamknij";
  closeBtn.addEventListener("click", function() {
    removeModal();
  })
  
  modal.innerHTML = offer.innerHTML;
  modal.appendChild(closeBtn);
  
  window.setTimeout(function() {
    modal.classList.add("active");
  }, 50);  
  
  body.appendChild(modal);
}

var removeModal = function() {
  var body = document.querySelector("body"); 
  var modal = document.querySelector(".modal");
  
  body.classList.remove("modal-active");
  body.removeChild(modal);
}