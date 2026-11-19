// Keep the footer year current.
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Gallery filter: All / Equipment / Workouts
var chips = document.querySelectorAll(".chip");
var items = document.querySelectorAll(".grid li");

chips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    var filter = chip.getAttribute("data-filter");
    chips.forEach(function (c) {
      var active = c === chip;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-pressed", active ? "true" : "false");
    });
    items.forEach(function (li) {
      li.hidden = !(filter === "all" || li.getAttribute("data-group") === filter);
    });
  });
});

// Lightbox: open a photo larger
var box = document.getElementById("lightbox");
var boxImg = document.getElementById("lightbox-img");
var boxCaption = document.getElementById("lightbox-caption");
var boxClose = document.getElementById("lightbox-close");

document.querySelectorAll(".thumb").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var img = btn.querySelector("img");
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    boxCaption.textContent = img.alt;
    if (box.showModal) {
      box.showModal();
    }
  });
});

if (boxClose) {
  boxClose.addEventListener("click", function () {
    box.close();
  });
}

// Click on the dark area around the photo closes it.
if (box) {
  box.addEventListener("click", function (e) {
    if (e.target === box) {
      box.close();
    }
  });
}
