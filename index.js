// configuration of the observers
var config = { attributes: true, childList: true, characterData: true };

// select the ads node (ads container)
const ads = document.querySelector("[data-role='toast-container']");

let goPro;
window.onload = function () {
  goPro = document.getElementById("overlap-manager-root");
  observerGoPro.observe(goPro, config);
};

// create an observer instance for ads
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type == "childList") {
      if (mutation.addedNodes.length >= 1) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          // remove ads when it appears
          ads.removeChild(mutation.addedNodes[i]);
          console.log("Ad removed!");
        }
      }
    }
  });
});

// create an observer instance for "Go Pro" ad
var observerGoPro = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type == "childList") {
      if (mutation.addedNodes.length >= 1) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          if (mutation.addedNodes[0].nextElementSibling) {
            mutation.addedNodes[0].nextElementSibling.childNodes[0].remove();
            console.log("Go Pro ad removed!");
          }
        }
      }
    }
  });
});

// pass in the ads node, as well as the observer options
observer.observe(ads, config);
