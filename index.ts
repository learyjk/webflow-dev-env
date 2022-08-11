import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  // Change heading on button click
  const button = document.querySelector("#button");
  if (!button) return;
  button.addEventListener("click", function () {
    const heading = document.querySelector("#heading");
    if (!heading) return;
    heading.textContent = "v0.3.0";
  });

  // setup splide
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
  });
  splide.mount();
});
