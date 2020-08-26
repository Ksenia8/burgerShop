"use strict";
$(".menu-acco__trigger").on("click", function (e) {
    e.preventDefault();
    var c = e.currentTarget.parentNode;
    if (c.classList.contains("active")) return null;
    $(".menu-acco__item").removeClass("active"), c.classList.add("active")
}), $(".menu-close").on("click", function (e) {
    e.preventDefault(), $(".menu-acco__item").removeClass("active")
});