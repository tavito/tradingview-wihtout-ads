// select the target node (ads container)
var target = document.querySelector("[data-role='toast-container']");

// create an observer instance
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type == "childList") {
      if (mutation.addedNodes.length >= 1) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          console.log("Ad removed!");
          // remove ads when it appears
          mutation.target.removeChild(mutation.addedNodes[i]);
        }
      }
    }
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
