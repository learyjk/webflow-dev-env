"use strict";
exports.__esModule = true;
var splide_1 = require("@splidejs/splide");
document.addEventListener("DOMContentLoaded", function () {
    // Change heading on button click
    var button = document.querySelector("#button");
    // if (!button) return;
    button.addEventListener("click", function () {
        var heading = document.querySelector("#heading");
        if (!heading)
            return;
        heading.textContent = "Build with tsc";
    });
    // setup splide
    var splide = new splide_1["default"](".splide", {
        type: "loop",
        perPage: 3
    });
    splide.mount();
});
