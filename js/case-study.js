// Case study pages: mobile menu toggle and screenshot lightbox
document.addEventListener("DOMContentLoaded", function () {
  // mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".navbar .menu");
  if (toggle && menu) {
    var flip = function () {
      menu.classList.toggle("active");
      toggle.querySelector("i").classList.toggle("active");
    };
    toggle.addEventListener("click", flip);
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flip();
      }
    });
  }

  // hide figures whose screenshot hasn't been added yet
  document.querySelectorAll(".shot img").forEach(function (img) {
    var hide = function () {
      img.closest(".shot").classList.add("is-missing");
      // hide the whole Screenshots section once none are left
      var gallery = img.closest(".gallery");
      if (gallery && !gallery.querySelector(".shot:not(.is-missing)")) {
        gallery.closest(".case-section").hidden = true;
      }
    };
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener("error", hide);
  });

  // lightbox
  var box = document.querySelector(".lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var boxImg = box.querySelector("img");
  var boxCap = box.querySelector("p");

  document.querySelectorAll(".shot button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      var cap = btn.closest(".shot").querySelector("figcaption");
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
      boxCap.textContent = cap ? cap.textContent : "";
      box.showModal();
    });
  });

  box.addEventListener("click", function () {
    box.close();
  });
});
